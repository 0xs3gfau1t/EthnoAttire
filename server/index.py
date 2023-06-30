from ultralytics import YOLO
from flask import Flask, request
from PIL import Image
import uuid
import cv2

app = Flask(__name__)

#
# This constraint is to limit upload size on video files
# Better to do this way than to rely on content-length
# Or by reading the whole file in memory and counting
#
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024

model = YOLO("./model.pt")


@app.route("/api/image", methods=["POST"])
def predictImage():
    image = request.files["img"]

    if image is None:
        return {"message": "No image received"}

    result = model([Image.open(image)], conf=0.6)
    predictedROI = result[0].boxes.xyxyn.tolist()
    confScores = result[0].boxes.conf.tolist()
    classes = result[0].boxes.cls.tolist()
    prediction = []
    for i in range(len(predictedROI)):
        prediction.append(
            {
                "confidence": confScores[i],
                "box": predictedROI[i],
                "classId": int(classes[i]),
                "name": result[0].names[classes[i]],
            }
        )
    return {"frame": prediction}


@app.route("/api/video", methods=["POST"])
def predictVideo():
    video = request.files["vid"]

    if video is None:
        return {"message": "No video received"}

    name = "/tmp/" + str(uuid.uuid4()) + ".mp4"
    video.save(name)

    predicted = model(name, stream=True, conf=0.6, save=True)

    cap = cv2.VideoCapture(name)
    fps = cap.get(cv2.CAP_PROP_FPS)

    frames = []
    uniqueClasses = {}
    while True:
        frameResult = []
        try:
            result = next(predicted)

            boxes = result.boxes.xyxyn.tolist()
            confidence = result.boxes.conf.tolist()
            classes = result.boxes.cls.tolist()
            for i in range(len(boxes)):
                name = result.names[classes[i]]
                frameResult.append(
                    {
                        "confidence": confidence[i],
                        "box": boxes[i],
                        "name": name,
                        "classId": int(classes[i]),
                    }
                )

                uniqueClasses[int(classes[i])] = name
            frames.append(frameResult)
        except StopIteration:
            totalDetectedDistinctClasses = []
            for k, v in uniqueClasses.items():
                totalDetectedDistinctClasses.append([k, v])
            print(
                "Total frames: ",
                len(frames),
                "\n Total Classes: ",
                len(totalDetectedDistinctClasses),
            )
            return {
                "frames": frames,
                "classes": totalDetectedDistinctClasses,
                "fps": fps,
            }


@app.route("/")
def home():
    return {"message": "Konichiwa, stranger san"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
