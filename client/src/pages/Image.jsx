import { useDispatch, useSelector } from 'react-redux'
import UploadCard from '../components/UploadCard'
import { addImage } from '../redux/reducers/detection'
import { GrClear } from 'react-icons/gr'
export default function Image() {
    const dispatch = useDispatch()
    const imageDetected = useSelector(state => state.detection.image)

    const handleChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = r => {
            dispatch(addImage({ data: r?.target?.result }))
        }
    }
    function handleSubmit() {}
    return (
        <>
            {imageDetected === null ? (
                <UploadCard
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            ) : (
                <div className="flex items-center mt-10 justify-around">
                    <div className="flex flex-col place-items-center">
                        <img src={imageDetected} className="h-[30rem]" />
                        <div>
                            <GrClear size="3em">Clear Image</GrClear>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
