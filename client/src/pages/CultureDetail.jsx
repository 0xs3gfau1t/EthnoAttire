import { useState } from 'react'

const Culture = () => {
    const [collapse, setCollapse] = useState([true, false, false])

    const updateCol = idx => {
        let update = [...collapse]
        update[idx] = !update[idx]
        setCollapse(update)
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl bold">Newari Culture</h1>
            <div>Map Goes Here</div>
            <div className="section ">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(0)}
                >
                    Description {collapse[0] ? '▴' : '▾'}
                </h2>
                {collapse[0] && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit animi laborum unde quo distinctio,
                        repellat sed perspiciatis minus esse sunt accusantium
                        optio, atque a enim ipsum deleniti facilis veritatis
                        placeat!
                    </p>
                )}
            </div>
            <div className="section">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(1)}
                >
                    Traditional Attire {collapse[1] ? '▴' : '▾'}
                </h2>
                {collapse[1] && (
                    <div>
                        <div className="">
                            <h3>Male</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta dolore corrupti, numquam
                                quod quidem soluta, magni, alias atque vitae
                                molestias accusantium itaque ut veniam modi
                                ipsum neque. Distinctio, cum? Recusandae?
                            </p>
                        </div>
                        <div className="">
                            <h3>Female</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dicta dolore corrupti, numquam
                                quod quidem soluta, magni, alias atque vitae
                                molestias accusantium itaque ut veniam modi
                                ipsum neque. Distinctio, cum? Recusandae?
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="section ">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(2)}
                >
                    Festivals {collapse[2] ? '▴' : '▾'}
                </h2>
                {collapse[2] && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit animi laborum unde quo distinctio,
                        repellat sed perspiciatis minus esse sunt accusantium
                        optio, atque a enim ipsum deleniti facilis veritatis
                        placeat!
                    </p>
                )}
            </div>
        </div>
    )
}

export default Culture
