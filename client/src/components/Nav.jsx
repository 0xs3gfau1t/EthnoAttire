import { Link } from 'react-router-dom'
import {
    AiOutlineFileImage,
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineVideoCamera,
} from 'react-icons/ai'

export default function Nav() {
    return (
        <div className="flex flex-row justify-around h-full items-center">
            <Link to={'/'} className="flex flex-col items-center">
                <AiOutlineHome className="text-4xl" />
                <span>Home</span>
            </Link>
            <Link to={'/image'} className="flex flex-col items-center">
                <AiOutlineFileImage className="text-4xl" />
                <span>Image</span>
            </Link>
            <Link to={'/video'} className="flex flex-col items-center">
                <AiOutlineVideoCamera className="text-4xl" />
                <span>Video</span>
            </Link>
            <Link to={'/culture'} className="flex flex-col items-center">
                <AiOutlineInfoCircle className="text-4xl" />
                <span>Info</span>
            </Link>
        </div>
    )
}
