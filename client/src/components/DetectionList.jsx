export default function DetectionList({ items, handleClick }) {
    return (
        <ul className="flex flex-wrap overflow-scroll gap-3 pt-3">
            {items?.map((item, index) => (
                <li
                    onClick={() => handleClick(item)}
                    key={index}
                    className="border w-fit px-3 py-1 rounded-md"
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}
