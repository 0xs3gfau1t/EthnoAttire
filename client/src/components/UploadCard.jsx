/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function UploadCard({ handleChange, image, accept }) {
    return (
        <div className="h-full w-full flex items-center">
            <input
                type="file"
                accept={accept}
                hidden
                id="imageUpload"
                onChange={e => handleChange(e)}
            />
            <label
                htmlFor="imageUpload"
                className="h-1/2 w-full flex flex-col items-center"
            >
                <img src={image} />
                <div
                    className={`${accept.includes('video')
                            ? 'bg-[#d6a5de]'
                            : 'bg-blue-100'
                        } px-4 py-2 rounded-md cursor-pointer`}
                >
                    Upload
                </div>
            </label>
        </div>
    )
}
