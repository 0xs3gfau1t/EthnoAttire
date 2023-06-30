import { BsFillPlusCircleFill, BsCheck2All } from 'react-icons/bs'

export default function UploadCard({ handleSubmit, handleChange }) {
    return (
        <div className="">
            <input
                type="file"
                accept="image/*|video/*"
                hidden
                id="imageUpload"
                onChange={e => handleChange(e)}
            />
            <label htmlFor="imageUpload">
                <div className="">
                    <BsFillPlusCircleFill
                        size="3em"
                        className="group-hover:fill-inherit transition duration-300"
                    />
                    <p>Click to add an image for upload</p>
                </div>
            </label>
            <div className="border border-indigo-500 hover:border-emerald-500 transition duration-300 rounded-lg hover:cursor-pointer px-3 py-2 mt-3">
                <BsCheck2All size="2em" />
            </div>
        </div>
    )
}
