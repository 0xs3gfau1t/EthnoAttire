import { useState } from 'react'

const VideoPage = () => {
    const [file, setFile] = useState()
    const [videoBlob, setVideoBlob] = useState()

    const loadVideo = e => {
        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.onload = e => setVideoBlob(e.target.result)
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="h-full w-full flex flex-col">
            {file != undefined && (
                <>
                    <video src={videoBlob} className="h-1/2" controls />
                    <span className="self-center">{file?.name}</span>
                </>
            )}
            <label
                htmlFor="addVideo"
                className="w-full h-1/2 flex flex-col items-center gap-4"
            >
                {file == undefined ? (
                    <>
                        <img src="assets/video.svg" />
                        <div className="bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
                            Load Video
                        </div>
                    </>
                ) : (
                    <>
                        <button className="bg-blue-300 px-4 py-2 rounded-md">
                            Change Video
                        </button>
                        <button className="bg-blue-300 px-4 py-2 rounded-md">
                            Predict
                        </button>
                    </>
                )}
            </label>
            <input
                id="addVideo"
                type="file"
                accept=".mp4"
                className="hidden"
                onChange={loadVideo}
            />
        </div>
    )
}

export default VideoPage
