import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'

import Attire from '../components/Attire'
import Map from './Map'
import { cultureList } from '../../data/culture'

const CultureDetail = () => {
    const [collapse, setCollapse] = useState([true, true, true, false, false, false])
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
        <div className="flex flex-col h-full w-full justify-start gap-y-4">
            <div className="relative flex-shrink-0 h-2/5 overflow-hidden">
                <h1 className="text-3xl font-bold text-center pb-4">
                    {cultureList[id]['name']}
                </h1>
                <div className="section">
                    <h2
                        className="cursor-pointer flex items-center justify-between px-3 py-1 shadow-md"
                        onClick={e => updateCol(0)}
                    >
                        <span className='text-2xl'>Map</span> {collapse[0] ? <BiSolidUpArrow size='1.5em'/> : <BiSolidDownArrow size='1.5em'/>}
                    </h2>
                    {collapse[0] && <Map toHigh={cultureList[id]['origin']} />}
                </div>
            </div>
            <div className="flex flex-col gap-y-2 rounded-md transition duration-300 overflow-scroll h-fit">
                <div className="flex flex-col gap-y-4">
                    <div className="section flex-shrink-0">
                        <h2
                            className="cursor-pointer flex items-center justify-between px-3 py-1 shadow-md"
                            onClick={e => updateCol(1)}
                        >
                            <span className='text-2xl'>Description</span> {collapse[1] ? <BiSolidUpArrow size='1.5em'/> : <BiSolidDownArrow size='1.5em'/>}
                        </h2>
                        {collapse[1] && <p>{cultureList[id]['description']}</p>}                    </div>
                    <div className="section">
                        <h2
                            className="cursor-pointer flex items-center justify-between px-3 py-1 shadow-md"
                            onClick={e => updateCol(2)}
                        >
                            <span className='text-2xl'>Traditional Attire</span> {collapse[2] ? <BiSolidUpArrow size='1.5em'/> : <BiSolidDownArrow size='1.5em'/>}
                        </h2>
                        {collapse[2] && (
                            <Attire culture={cultureList[id]['name']} />
                        )}
                    </div>
                    <div className="section">
                        <h2
                            className="cursor-pointer flex items-center justify-between px-3 py-1 shadow-md"
                            onClick={e => updateCol(3)}
                        >
                            <span className='text-2xl'>Festivals</span> {collapse[3] ? <BiSolidUpArrow size='1.5em'/> : <BiSolidDownArrow size='1.5em'/>}
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
                            className="cursor-pointer flex items-center justify-between px-3 py-1 shadow-md"
                            onClick={e => updateCol(4)}
                        >
                            <span className='text-2xl'>Foods</span> {collapse[4] ? <BiSolidUpArrow size='1.5em'/> : <BiSolidDownArrow size='1.5em'/>}
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
