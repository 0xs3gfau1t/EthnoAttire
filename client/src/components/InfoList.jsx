import { RxCross2 } from 'react-icons/rx'
import { FcInfo } from 'react-icons/fc'

export default function DetectionList({ klasName, handleBack }) {
    return (
        <div className="flex flex-col relative overflow-scroll no-scrollbar gap-2">
            <RxCross2
                size="1.5em"
                className="self-end absolute mr-2 mt-2"
                onClick={handleBack}
            />
            <h2 className="self-center text-2xl border-4 border-t-0 border-black px-3 py-1 rounded-b-md">
                {klasName}
            </h2>
            <FcInfo size="1.5em" className="absolute ml-2 mt-2" />
            <p>
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd lksdjflkjsdflsjkdflkksjd
                lksdjflkjsdflsjkdflkksjd
            </p>
        </div>
    )
}
