import UploadCard from '../components/UploadCard'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import { GrClear } from 'react-icons/gr'
export default function Image() {
    const [targetImage, setTargetImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)

    const [predictedClasses, setPredictedClasses] = useState([])
    const [bbox, setBbox] = useState([])
    const [detected, setDetected] = useState(false)

    const handleChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = r => {
            setTargetImage(r?.target?.result )
            setImageFile(e.target.files[0])
        }
    }
    function handleSubmit() {
        const data = new FormData()
        data.append('img', imageFile)
        fetch(
            '/api/image',
            {
                method: 'POST',
                body: data
            }
        )
            .then(r => r.json())
            .then(r => {
                const tempBbox = []
                const tempPredictedClass = []
                for (let i of r.frame){
                    tempBbox.push(i.box)
                    tempPredictedClass.push(i.name)
                }
                setPredictedClasses(tempPredictedClass)
                setBbox(tempBbox)
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

    function bounds(){
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
                height: i.height
            })
    }
    return (
        <>
            {targetImage === null ? (
                <UploadCard
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            ) : (
                <div className='flex flex-col'>
                    <div className="relative mt-10" ref={parentRef}>
                        <img src={targetImage} className="h-auto w-[20rem] inset-0 m-auto" onLoad={bounds} ref={imageRef}/> 
                        {
                            detected &&
                            <ul>
                                {
                                    bbox.map(box => {
                                        const a = <li className='border border-black absolute'
                                        style={{
                                            left: `${bounding.left + box[0] * bounding.width}px`,
                                            top: `${bounding.top + box[1] * bounding.height}px`,
                                            right: `${bounding.right + (1-box[2]) * bounding.width}px`,
                                            bottom: `${bounding.bottom + (1-box[3]) * bounding.height}px`
                                        }} key={box}/>
                                        return a
                                    })
                                }
                            </ul>
                        }
                    </div>
                    <div className='flex gap-x-5 mt-3 left-0 bottom-0 m-auto self-center'>
                        <AiOutlineCloudUpload
                            size="2em"
                            onClick={handleSubmit}
                        />
                        <GrClear size="2em" onClick={() => {
                                setTargetImage(null)
                                setPredictedClasses([])
                                setBbox([])
                                setDetected(false)
                            }
                        }/>
                    </div>
                </div>
            )}
        </>
    )
}
