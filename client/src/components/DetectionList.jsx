import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function DetectionList({ items, handleClick, onInfo }) {
    return (
        <ul className="flex flex-wrap overflow-scroll gap-3 pt-3">
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-row gap-2 items-center border border-b-2 w-fit px-3 py-1 rounded-t-md ${item.show ? 'border-b-green-500' : 'border-b-red-500'
                        }`}
                >
                    <li
                        onClick={() => handleClick(item.classId)}
                        className="cursor-pointer"
                    >
                        <span className="text-sm font-bold">
                            {item.classId}
                        </span>
                        : <span>{item.name}</span>
                    </li>
                    <AiOutlineInfoCircle
                        onClick={() => onInfo(item.name)}
                        className="cursor-pointer"
                    />
                </div>
            ))}
        </ul>
    )
}
