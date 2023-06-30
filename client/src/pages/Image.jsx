import UploadCard from '../components/UploadCard'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { GrClear } from 'react-icons/gr'
import inferEthnicity from '../utils/inferCulture'

import DetectionList from '../components/DetectionList'
import { BiSolidUpArrow } from 'react-icons/bi'
import InfoList from '../components/InfoList'

function unique(arr) {
    const mp = {}
    const uniqueArr = []
    for (let i of arr) {
        if (mp[i] === undefined) {
            mp[i] = true
            uniqueArr.push(i)
        }
    }
    console.log('Uni', uniqueArr)
    return uniqueArr
}

export default function Image() {
    const [targetImage, setTargetImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)

    const [predictedClasses, setPredictedClasses] = useState([])
    const [detectedItems, setDetectedItems] = useState([])
    const [detected, setDetected] = useState(false)
    const [noInfo, setNoInfo] = useState(null)

    const handleChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = r => {
            setTargetImage(r?.target?.result)
            setImageFile(e.target.files[0])
        }
    }

    function handleSubmit() {
        const data = new FormData()
        data.append('img', imageFile)
        fetch('/api/image', {
            method: 'POST',
            body: data,
        })
            .then(r => r.json())
            .then(r => {
                const tempBbox = []
                const tempPredictedClass = []
                for (let i of r.frame) {
                    tempBbox.push(i.box)
                    tempPredictedClass.push(i.name)
                }
                setPredictedClasses(tempPredictedClass)
                setDetectedItems(r.frame)
                setDetected(true)
            })
            .catch(e => {
                console.error(e)
                alert('Detection failed')
            })
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

    function classClickHandler(name) {
        setNoInfo(name)
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
                                    const a = (
                                        <li
                                            className="border border-black absolute list-none"
                                            style={{
                                                left: `${
                                                    bounding.left +
                                                    item.box[0] * bounding.width
                                                }px`,
                                                top: `${
                                                    bounding.top +
                                                    item.box[1] *
                                                        bounding.height
                                                }px`,
                                                right: `${
                                                    bounding.right +
                                                    (1 - item.box[2]) *
                                                        bounding.width
                                                }px`,
                                                bottom: `${
                                                    bounding.bottom +
                                                    (1 - item.box[3]) *
                                                        bounding.height
                                                }px`,
                                            }}
                                            key={idx}
                                        />
                                    )
                                    return a
                                })}
                            </>
                        )}
                    </div>
                    <div className="h-1/2 flex flex-col justify-between gap-3 flex-grow p-2 max-h-[50%] overflow-hidden">
                        <div className="flex gap-x-5 self-center shadow-md border border-black rounded-md px-2 py-1">
                            <AiOutlineCloudUpload
                                size="2em"
                                onClick={handleSubmit}
                            />
                            <GrClear
                                size="2em"
                                onClick={() => {
                                    setTargetImage(null)
                                    setPredictedClasses([])
                                    setDetectedItems([])
                                    setDetected(false)
                                }}
                            />
                        </div>
                        {detected && (
                            <div className="flex flex-col overflow-hidden">
                                <BiSolidUpArrow
                                    className="self-center"
                                    size="1.5rem"
                                />
                                <div
                                    className={`border border-black border-x-4 border-t-4 flex flex-col rounded-md transition duration-300 no-scrollbar p-2 overflow-hidden max-h-full ${
                                        noInfo != null ? 'pt-0' : ''
                                    }`}
                                >
                                    {noInfo === null ? (
                                        <>
                                            <span>
                                                Ethnicity:{' '}
                                                {inferEthnicity(detectedItems)}
                                            </span>
                                            <DetectionList
                                                items={unique(predictedClasses)}
                                                handleClick={classClickHandler}
                                            />
                                        </>
                                    ) : (
                                        <InfoList
                                            klasName={noInfo}
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
