import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function UploadCard({ handleSubmit, handleChange }) {
    return (
        <div className="">
            <input
                type="file"
                accept="image/*"
                hidden
                id="imageUpload"
                onChange={e => handleChange(e)}
            />
            <label htmlFor="imageUpload" className="relative">
                <div className="relative m-auto max-w-md">
                    <img
                        src="assets/imageHolder.svg"
                        className="border border-indigo-900"
                    />
                    <AiOutlinePlusCircle
                        size="7em"
                        className="group-hover:fill-inherit transition duration-300 absolute left-0 right-0 m-auto top-0 bottom-0 right-0 left-0"
                        color="#E6E6E6"
                    />
                </div>
            </label>
        </div>
    )
}
