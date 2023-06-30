from ultralytics import YOLO
from flask import Flask, request
from PIL import Image
import uuid
import cv2
import random

app = Flask(__name__)

#
# This constraint is to limit upload size on video files
# Better to do this way than to rely on content-length
# Or by reading the whole file in memory and counting
#
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024

model = YOLO("./model.pt")
colors = [[random.randint(0, 255) for _ in range(3)] for _ in range(24)]


@app.route("/api/image", methods=["POST"])
def predictImage():
    image = request.files["img"]

    if image is None:
        return {"message": "No image received"}

    result = model([Image.open(image)], conf=0.6)[0]

    data = result.boxes.data.cpu().tolist()
    h, w = result.orig_shape

    names = result.names

    r = []
    for row in data:
        box = [row[0] / w, row[1] / h, row[2] / w, row[3] / h]
        conf = row[4]
        classId = int(row[5])
        name = names[classId]
        r.append(
            {
                "box": box,
                "confidence": conf,
                "classId": classId,
                "name": name,
                "color": "#%02x%02x%02x" % tuple(colors[classId]),
            }
        )

    return {"frame": r}


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

            data = result.boxes.data.cpu().tolist()
            h, w = result.orig_shape

            names = result.names

            for row in data:
                box = [row[0] / w, row[1] / h, row[2] / w, row[3] / h]
                conf = row[4]
                classId = int(row[5])
                name = names[classId]
                frameResult.append(
                    {
                        "box": box,
                        "confidence": conf,
                        "classId": classId,
                        "name": name,
                        "color": "#%02x%02x%02x" % tuple(colors[classId]),
                    }
                )
                uniqueClasses[classId] = name

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
