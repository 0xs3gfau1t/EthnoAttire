export const BoundingBox = ({ relativePos, detection, idx }) => {
    return (
        <>
            <span
                className="absolute bg-black text-white px-1 rounded-t-sm text-xs"
                style={{
                    left: `${
                        relativePos.left + detection.box[0] * relativePos.width
                    }px`,
                    bottom: `${
                        relativePos.bottom +
                        (1 - detection.box[1]) * relativePos.height
                    }px`,
                }}
            >
                {idx}
            </span>
            <div
                className="absolute border-2 rounded-sm"
                style={{
                    borderColor: detection.color,
                    left: `${
                        relativePos.left + detection.box[0] * relativePos.width
                    }px`,
                    top: `${
                        relativePos.top + detection.box[1] * relativePos.height
                    }px`,
                    right: `${
                        relativePos.right +
                        (1 - detection.box[2]) * relativePos.width
                    }px`,
                    bottom: `${
                        relativePos.bottom +
                        (1 - detection.box[3]) * relativePos.height
                    }px`,
                }}
            />
        </>
    )
}
