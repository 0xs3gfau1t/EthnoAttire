import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Attire from '../components/Attire'
import Map from './Map'
import { cultureList } from '../../data/culture'

const CultureDetail = () => {
    const [collapse, setCollapse] = useState([true, false, false, false, false, false])
    let { id } = useParams()

    const updateCol = idx => {
        let update = [...collapse]
        update[idx] = !update[idx]
        setCollapse(update)
    }

    if (!cultureList[id])
        return (
            <div>
                <Link className="text-sm bold text-blue-600" to={'/culture'}>
                    {'<< Back to All Culture'}
                </Link>
                <h1 className="text-2xl text-center mt-20 bold">Not found</h1>{' '}
            </div>
        )
    return (
        <div className="flex flex-col h-full w-full justify-between">
            <div className="relative flex-shrink-0 h-1/3 overflow-hidden">
                <h1 className="text-2xl font-bold text-center">
                    {cultureList[id]['name']}
                </h1>
                <div className="section">
                    <h2
                        className="text-xl cursor-pointer"
                        onClick={e => updateCol(0)}
                    >
                        Map {collapse[0] ? '▴' : '▾'}
                    </h2>
                    {collapse[0] && <Map toHigh={cultureList[id]['origin']} />}
                </div>
            </div>
            <div className="border border-black border-x-4 border-t-4 flex flex-col gap-y-2 rounded-md transition duration-300 p-2 overflow-scroll h-fit">
                <div className="flex flex-col">
                    <div className="section flex-shrink-0">
                        <h2
                            className="text-xl cursor-pointer"
                            onClick={e => updateCol(1)}
                        >
                            Description {collapse[1] ? '▴' : '▾'}
                        </h2>
                        {collapse[1] && <p>{cultureList[id]['description']}</p>}                    </div>
                    <div className="section">
                        <h2
                            className="text-xl cursor-pointer"
                            onClick={e => updateCol(1)}
                        >
                            Traditional Attire {collapse[2] ? '▴' : '▾'}
                        </h2>
                        {collapse[2] && (
                            <Attire culture={cultureList[id]['name']} />
                        )}
                    </div>
                    <div className="section">
                        <h2
                            className="text-xl cursor-pointer"
                            onClick={e => updateCol(3)}
                        >
                            Festivals {collapse[3] ? '▴' : '▾'}
                        </h2>
                        {collapse[3] && (
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Suscipit animi laborum unde
                                quo distinctio, repellat sed perspiciatis minus
                                esse sunt accusantium optio, atque a enim ipsum
                                deleniti facilis veritatis placeat!
                            </p>
                        )}
                    </div>
                    <div className="section">
                        <h2
                            className="text-xl cursor-pointer"
                            onClick={e => updateCol(4)}
                        >
                            Food {collapse[4] ? '▴' : '▾'}
                        </h2>
                        {collapse[4] && (
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Suscipit animi laborum unde
                                quo distinctio, repellat sed perspiciatis minus
                                esse sunt accusantium optio, atque a enim ipsum
                                deleniti facilis veritatis placeat!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CultureDetail
