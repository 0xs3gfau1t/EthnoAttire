/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'

const VideoResult = ({ data, video }) => {
    const [currentFrame, setCurrentFrame] = useState(0)
    const [relativePos, setRelativePos] = useState()

    const [timer, setTimer] = useState(-1)

    const vidRef = useRef(null)
    const previewRef = useRef(null)

    return (
        <div className="h-full w-full">
            <div className="h-1/2 relative" ref={previewRef}>
                <video
                    src={video}
                    className="h-full absolute m-auto inset-0"
                    controls={true}
                    ref={vidRef}
                    onPlay={() => {
                        const parentPos =
                            previewRef.current?.getBoundingClientRect()
                        const childPos = vidRef.current?.getBoundingClientRect()
                        if (!parentPos || !childPos) setRelativePos(undefined)
                        else
                            setRelativePos({
                                left: childPos.left - parentPos.left,
                                top: childPos.top - parentPos.top,
                                right: parentPos.right - childPos.right,
                                bottom: parentPos.bottom - childPos.bottom,
                                width: childPos.width,
                                height: childPos.height,
                            })
                        const t = setInterval(() => {
                            if (!vidRef.current?.paused) {
                                const curFrame = Math.round(
                                    data.fps * vidRef.current?.currentTime
                                )
                                console.log('Playing frame', curFrame)
                                setCurrentFrame(curFrame)
                            }
                        }, (1 / data.fps) * 1000)
                        setTimer(t)
                    }}
                    onEnded={() => {
                        clearInterval(timer)
                    }}
                    onPause={() => {
                        clearInterval(timer)
                    }}
                />
                {relativePos != undefined && currentFrame != undefined && (
                    <>
                        {data.frames[currentFrame]?.map((d, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="absolute border border-white"
                                    style={{
                                        left: `${
                                            relativePos.left +
                                            d.box[0] * relativePos.width
                                        }px`,
                                        top: `${
                                            relativePos.top +
                                            d.box[1] * relativePos.height
                                        }px`,
                                        right: `${
                                            relativePos.right +
                                            (1 - d.box[2]) * relativePos.width
                                        }px`,
                                        bottom: `${
                                            relativePos.bottom +
                                            (1 - d.box[3]) * relativePos.height
                                        }px`,
                                    }}
                                />
                            )
                        })}
                    </>
                )}
            </div>
            <div>
                <h1 className="font-semibold">Detected Items in this video</h1>
                <div className="flex flex-row flex-wrap gap-4">
                    {data.classes.map(([classId, name]) => (
                        <button
                            key={classId}
                            className="bg-blue-300 px-4 py-2 rounded-md"
                        >
                            {name}
                        </button>
                    ))}
                    {}
                </div>
                {!vidRef.current?.playing && (
                    <>
                        <h1 className="font-semibold">
                            Detected Items in this frame
                        </h1>
                        {data.frames[currentFrame]?.map((d, idx) => (
                            <button
                                key={idx}
                                className="bg-blue-300 px-4 py-2 rounded-md"
                            >
                                {d.name}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default VideoResult
