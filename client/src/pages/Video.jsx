import { useState } from 'react'
import VideoResult from '../components/VideoResult'
import { AiOutlineCloudUpload, AiOutlineSync } from 'react-icons/ai'
import { GrClear } from 'react-icons/gr'
import UploadCard from '../components/UploadCard'

const VideoPage = () => {
    const [file, setFile] = useState()
    const [videoBlob, setVideoBlob] = useState()
    const [predictedResult, setPredictedResult] = useState()
    const [predicting, setPredicting] = useState(false)

    const loadVideo = e => {
        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.onload = e => setVideoBlob(e.target.result)
        reader.readAsDataURL(e.target.files[0])
    }

    const predict = () => {
        setPredicting(true)
        const data = new FormData()
        data.append('vid', file)
        fetch('/api/video', { method: 'POST', body: data }).then(async res => {
            if (res.status == 200) {
                const data = await res.json()
                setPredictedResult(data)
            }
        }).finally( () => setPredicting(false))
    }

    if (predictedResult != undefined)
        return <VideoResult data={predictedResult} video={videoBlob} />

    return (
        <>
            {file == undefined ? (
                <UploadCard
                    handleChange={loadVideo}
                    image="assets/video.svg"
                    accept="video/*"
                />
            ) : (
                <div className="h-full w-full flex flex-col justify-center gap-2">
                    <div className="h-1/2 relative">
                        <video
                            src={videoBlob}
                            className="h-full absolute m-auto inset-0"
                            controls={true}
                        />
                    </div>
                    <div className="flex gap-x-5 justify-center">
                    {!predicting ? <AiOutlineCloudUpload size="2em" onClick={predict} /> : <AiOutlineSync className='animate-spin' size='2em'/> }
                        <GrClear
                            size="2em"
                            onClick={() => {
                                setFile(undefined)
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default VideoPage
