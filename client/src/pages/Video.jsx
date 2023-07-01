import { AiOutlineCloudUpload, AiOutlineSync } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { GrClear } from 'react-icons/gr'
import UploadCard from '../components/UploadCard'
import { BoundingBox } from '../components/BoundingBox'
import { Link } from 'react-router-dom'
import DetectionList from '../components/DetectionList'
import InfoList from '../components/InfoList'
import inferEthnicity from '../utils/inferCulture'

const VideoPage = () => {
    const [file, setFile] = useState()
    const [videoBlob, setVideoBlob] = useState()
    const [predicting, setPredicting] = useState(false)
    const [data, setData] = useState()
    const [predictedClasses, setPredictedClasses] = useState(null)
    const [currentFrame, setCurrentFrame] = useState(0)
    const [timer, setTimer] = useState(-1)
    const [relativePos, setRelativePos] = useState()
    const [inferedEthnicity, setInferedEthnicity] = useState({
        name: null,
        id: null,
    })
    const [noInfo, setNoInfo] = useState(null)

    const loadVideo = e => {
        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.onload = e => setVideoBlob(e.target.result)
        reader.readAsDataURL(e.target.files[0])
    }

    const hideClass = id => {
        setPredictedClasses(oldData => {
            const newData = {}
            for (let i in oldData) {
                const d = oldData[i]
                newData[d.classId] = {
                    classId: d.classId,
                    name: d.name,
                    show: d.classId == id ? !d.show : d.show,
                }
            }
            return newData
        })
    }

    const predict = () => {
        setPredicting(true)
        const data = new FormData()
        data.append('vid', file)
        fetch('/api/video', { method: 'POST', body: data })
            .then(async res => {
                if (res.status == 200) {
                    const data = await res.json()
                    setData(data)
                    setPredictedClasses(
                        data.classes?.reduce(
                            (accum, value) => ({
                                ...accum,
                                [value[0]]: {
                                    classId: value[0],
                                    name: value[1],
                                    show: true,
                                },
                            }),
                            {}
                        )
                    )
                }
            })
            .finally(() => setPredicting(false))
    }

    const parentRef = useRef()
    const vidRef = useRef()

    return (
        <>
            {file == undefined ? (
                <UploadCard
                    handleChange={loadVideo}
                    image="assets/video.svg"
                    accept="video/*"
                />
            ) : (
                <div className="flex flex-col h-full w-full">
                    <div className="w-full text-center border-b border-black text-base">
                        VIDEO RESULT
                    </div>
                    <div className="relative mt-10 h-1/2" ref={parentRef}>
                        <video
                            src={videoBlob}
                            className="h-full absolute m-auto inset-0"
                            controls={true}
                            ref={vidRef}
                            onPlay={() => {
                                const parentPos =
                                    parentRef.current?.getBoundingClientRect()
                                const childPos =
                                    vidRef.current?.getBoundingClientRect()
                                if (!parentPos || !childPos)
                                    setRelativePos(undefined)
                                else
                                    setRelativePos({
                                        left: childPos.left - parentPos.left,
                                        top: childPos.top - parentPos.top,
                                        right: parentPos.right - childPos.right,
                                        bottom:
                                            parentPos.bottom - childPos.bottom,
                                        width: childPos.width,
                                        height: childPos.height,
                                    })
                                if (timer == -1) {
                                    const t = setInterval(() => {
                                        if (
                                            !vidRef.current?.paused &&
                                            data != null
                                        ) {
                                            const curFrame = Math.min(
                                                Math.round(
                                                    data.fps *
                                                    vidRef.current
                                                        ?.currentTime
                                                ),
                                                data.frames.length - 1
                                            )
                                            setCurrentFrame(curFrame)
                                            setInferedEthnicity(
                                                inferEthnicity(
                                                    data.frames[curFrame]
                                                )
                                            )
                                        }
                                    }, (1 / data.fps) * 1000)
                                    setTimer(t)
                                }
                            }}
                            onEnded={() => {
                                clearInterval(timer)
                                setTimer(-1)
                            }}
                            onPause={() => {
                                clearInterval(timer)
                                setTimer(-1)
                            }}
                        />
                        {relativePos != undefined &&
                            currentFrame != undefined &&
                            data != null && (
                                <>
                                    {data.frames[currentFrame]?.map(
                                        (d, idx) => {
                                            if (
                                                predictedClasses[d.classId].show
                                            )
                                                return (
                                                    <BoundingBox
                                                        key={idx}
                                                        relativePos={
                                                            relativePos
                                                        }
                                                        detection={d}
                                                        onClick={setNoInfo}
                                                    />
                                                )
                                        }
                                    )}
                                </>
                            )}
                    </div>
                    <div className="h-1/2 flex flex-col justify-start gap-3 flex-grow p-2 max-h-[50%] overflow-hidden">
                        <div className="flex gap-x-5 self-center shadow-md border border-black rounded-md px-2 py-1">
                            {!predicting ? (
                                <AiOutlineCloudUpload
                                    size="2em"
                                    onClick={predict}
                                />
                            ) : (
                                <AiOutlineSync
                                    size="2em"
                                    className="animate-spin"
                                />
                            )}
                            <GrClear
                                size="2em"
                                onClick={() => {
                                    setFile(null)
                                    setData(null)
                                    setCurrentFrame(-1)
                                }}
                            />
                        </div>
                        {data != null && (
                            <div className="flex flex-col overflow-hidden">
                                <div
                                    className={`border border-black shadow-2xl flex flex-col gap-y-2 rounded-md transition duration-300 no-scrollbar p-2 overflow-hidden max-h-full ${noInfo != null ? 'pt-0' : ''
                                        }`}
                                >
                                    {noInfo === null ? (
                                        <>
                                            <span className="border shadow-md px-3 py-2 w-fit rounded-lg self-center">
                                                <Link
                                                    to={`/culture/${inferedEthnicity?.id}`}
                                                >
                                                    Ethnicity:{' '}
                                                    {inferedEthnicity?.name}
                                                </Link>
                                            </span>
                                            <hr className="border-0 h-[4px] bg-slate-200 w-1/2 self-center" />
                                            <DetectionList
                                                items={Object.values(
                                                    predictedClasses
                                                )}
                                                onInfo={setNoInfo}
                                                handleClick={hideClass}
                                            />
                                        </>
                                    ) : (
                                        <InfoList
                                            classId={noInfo}
                                            handleBack={() => setNoInfo(null)}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default VideoPage
