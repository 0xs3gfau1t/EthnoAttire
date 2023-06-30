import { BsFillPlusCircleFill, BsCheck2All } from 'react-icons/bs'

export default function UploadCard({ handleSubmit, handleChange }) {
    return (
        <div className="flex flex-col items-center mt-10">
            <input
                type="file"
                accept="image/*|video/*"
                hidden
                id="imageUpload"
                onChange={e => handleChange(e)}
            />
            <label htmlFor="imageUpload">
                <div className="border border-indigo-900 px-10 pt-5 pb-0 rounded-md grid place-items-center hover:border-emerald-500 transition duration-300 hover:cursor-pointer group fill-emerald-500 h-60">
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
