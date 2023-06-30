import { useState } from 'react'
import VideoResult from '../components/VideoResult'
import { dummy_response } from '../utils/constants'

const VideoPage = () => {
    const [file, setFile] = useState()
    const [videoBlob, setVideoBlob] = useState()
    const [predictedResult, setPredictedResult] = useState()

    const loadVideo = e => {
        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.onload = e => setVideoBlob(e.target.result)
        reader.readAsDataURL(e.target.files[0])
    }

    const predict = () => {
        setPredictedResult(dummy_response)
        return
        const data = new FormData()
        data.append('vid', file)
        fetch('/api/video', { method: 'POST', body: data }).then(async res => {
            if (res.status == 200) {
                const data = await res.json()
                setPredictedResult(data)
            }
        })
    }

    if (predictedResult != undefined)
        return <VideoResult data={predictedResult} video={videoBlob} />

    return (
        <div className="h-full w-full flex flex-col">
            {file != undefined && (
                <>
                    <video src={videoBlob} className="h-1/2 m-auto" controls />
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
                        <button
                            className="bg-blue-300 px-4 py-2 rounded-md"
                            onClick={predict}
                        >
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
