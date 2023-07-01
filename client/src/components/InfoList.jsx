import { RxCross2 } from 'react-icons/rx'
import { FcInfo } from 'react-icons/fc'
import { ornaments } from '../../data/ornaments'

export default function InfoList({ classId , handleBack }) {
    return (
        <div className="flex flex-col relative overflow-scroll no-scrollbar gap-2">
            <RxCross2
                size="1.5em"
                className="self-end absolute mr-2 mt-2"
                onClick={handleBack}
            />
            <h2 className="self-center text-2xl border border-t-0 border-black px-3 py-1 rounded-b-xl">
                {ornaments[classId]?.name}
            </h2>
            <FcInfo size="1.5em" className="absolute ml-2 mt-2" />
            <img src={ornaments[classId]?.image} className='h-40 mx-auto rounded-lg'/>
            <p>
                {ornaments[classId]?.description}
            </p>
        </div>
    )
}
