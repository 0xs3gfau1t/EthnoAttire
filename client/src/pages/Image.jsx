import UploadCard from '../components/UploadCard'
import { AiOutlineCloudUpload, AiOutlineSync } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { GrClear } from 'react-icons/gr'
import inferEthnicity from '../utils/inferCulture'

import DetectionList from '../components/DetectionList'
import { BiSolidUpArrow } from 'react-icons/bi'
import InfoList from '../components/InfoList'
import { Link } from 'react-router-dom'
import { BoundingBox } from '../components/BoundingBox'

export default function Image() {
    const [targetImage, setTargetImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)

    const [predicting, setPredicting] = useState(false)
    const [predictedClasses, setPredictedClasses] = useState(null)
    const [detectedItems, setDetectedItems] = useState([])
    const [detected, setDetected] = useState(false)
    const [noInfo, setNoInfo] = useState(null)
    const [inferedEthnicity, setInferedEthnicity] = useState({
        name: null,
        id: null,
    })

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

    const handleChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = r => {
            setTargetImage(r?.target?.result)
            setImageFile(e.target.files[0])
        }
    }

    function handleSubmit() {
        setPredicting(true)
        const data = new FormData()
        data.append('img', imageFile)
        fetch('/api/image', {
            method: 'POST',
            body: data,
        })
            .then(r => r.json())
            .then(r => {
                const tempPredictedClass = {}
                for (let i of r.frame) {
                    tempPredictedClass[i.classId] = {
                        classId: i.classId,
                        name: i.name,
                        show: true,
                    }
                }
                setPredictedClasses(tempPredictedClass)
                setDetectedItems(r.frame)
                setDetected(true)
                setInferedEthnicity(inferEthnicity(r.frame))
            })
            .catch(e => {
                console.error(e)
                alert('Detection failed')
            })
            .finally(() => setPredicting(false))
    }

    const parentRef = useRef(null)
    const imageRef = useRef(null)

    const [bounding, setBounding] = useState(null)

    function bounds() {
        const p = parentRef.current?.getBoundingClientRect()
        const i = imageRef.current?.getBoundingClientRect()

        if (!p || !i) setBounding(null)
        else
            setBounding({
                left: i.left - p.left,
                right: p.right - i.right,
                top: i.top - p.top,
                bottom: p.bottom - i.bottom,
                width: i.width,
                height: i.height,
            })
    }

    return (
        <>
            {targetImage === null ? (
                <UploadCard
                    handleChange={handleChange}
                    image="assets/imageHolder.svg"
                    accept="image/*"
                />
            ) : (
                <div className="flex flex-col h-full w-full">
                    <div className="w-full text-center border-b border-black text-base">
                        PHOTO RESULT
                    </div>
                    <div className="relative mt-10 h-1/2" ref={parentRef}>
                        <img
                            src={targetImage}
                            className="h-full absolute inset-0 m-auto"
                            onLoad={bounds}
                            ref={imageRef}
                        />
                        {detected && (
                            <>
                                {detectedItems.map((item, idx) => {
                                    if (predictedClasses[item.classId].show)
                                        return (
                                            <BoundingBox
                                                key={idx}
                                                detection={item}
                                                onClick={setNoInfo}
                                                relativePos={bounding}
                                            />
                                        )
                                })}
                            </>
                        )}
                    </div>
                    <div className="h-1/2 flex flex-col justify-start gap-3 flex-grow p-2 max-h-[50%] overflow-hidden">
                        <div className="flex gap-x-5 self-center shadow-md border border-black rounded-md px-2 py-1">
                            {!predicting ? (
                                <AiOutlineCloudUpload
                                    size="2em"
                                    onClick={handleSubmit}
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
                                    setTargetImage(null)
                                    setPredictedClasses(null)
                                    setDetectedItems([])
                                    setDetected(false)
                                }}
                            />
                        </div>
                        {detected && (
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
                                                    {inferedEthnicity?.name ||
                                                        "Couldn't Detect"}
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
