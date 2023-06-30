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
            <label htmlFor="imageUpload" className="h-1/2 w-full">
                <div className="m-auto w-full relative">
                    <img src={image} />
                    <AiOutlinePlusCircle
                        className="group-hover:fill-inherit transition duration-300 absolute m-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem]"
                        color="#444"
                    />
                </div>
            </label>
        </div>
    )
}
