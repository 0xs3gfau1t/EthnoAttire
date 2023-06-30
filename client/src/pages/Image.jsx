import UploadCard from '../components/UploadCard'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { GrClear } from 'react-icons/gr'
import DetectionList from '../components/DetectionList'
import { BiSolidUpArrow } from 'react-icons/bi'
import InfoList from '../components/InfoList'

function unique(arr){
    const mp = {}
    const uniqueArr = []
    for (let i of arr){
        if(mp[i] === undefined){
            mp[i] = true
            uniqueArr.push(i)
        }
    }
    return uniqueArr
}
export default function Image() {
    const [targetImage, setTargetImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)

    const [predictedClasses, setPredictedClasses] = useState([])
    const [bbox, setBbox] = useState([])
    const [detected, setDetected] = useState(false)
    const [noInfo, setNoInfo] = useState(null)

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

    function classClickHandler(name){
        setNoInfo(name)
    }

    return (
        <>
            {targetImage === null ? (
                <UploadCard
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            ) : (
                <div className='flex flex-col h-full w-full border border-red-500'>
                    <div className="relative mt-10 h-1/2" ref={parentRef}>
                        <img src={targetImage} className="h-full absolute inset-0 m-auto" onLoad={bounds} ref={imageRef}/> 
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
                    <div className='flex gap-x-5 mt-3 left-0 bottom-0 m-auto self-center border border-black'>
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
                    {
                        detected &&
                        <div className='border border-black border-x-4 border-t-4 flex flex-col rounded-md h-1/2 transition duration-300 overflow-scroll pt-4 no-scrollbar mt-3'>
                            <BiSolidUpArrow className='-mt-5 self-center' size='1.5em'/>
                            {
                                noInfo === null ?
                                <DetectionList items={unique(predictedClasses)} handleClick={classClickHandler}/>
                                :
                                <InfoList klasName={noInfo} handleBack={() => setNoInfo(null)}/>
                            }
                        </div>
                    }
                </div>
            )}
        </>
    )
}
