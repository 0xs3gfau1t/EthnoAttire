import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Attire from '../components/Attire'
import Map from './Map'
import { cultureList } from '../../data/culture'

const CultureDetail = () => {
    const [collapse, setCollapse] = useState([true, true, false, false, false])
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
        <div className="flex flex-col gap-4">
            <Link className="text-sm bold text-blue-600" to={'/culture'}>
                {'<< Back to All Culture'}
            </Link>
            <h1 className="text-2xl font-bold text-center">
                {cultureList[id]['name']} Culture
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
            <div className="section">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(1)}
                >
                    Description {collapse[1] ? '▴' : '▾'}
                </h2>
                {collapse[1] && <p>{cultureList[id]['description']}</p>}
            </div>
            <div className="section">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(2)}
                >
                    Traditional Attire {collapse[2] ? '▴' : '▾'}
                </h2>
                {collapse[2] && <Attire culture={cultureList[id]['name']} />}
            </div>
            <div className="section ">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(3)}
                >
                    Festivals {collapse[3] ? '▴' : '▾'}
                </h2>
                {collapse[3] && (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit animi laborum unde quo distinctio,
                        repellat sed perspiciatis minus esse sunt accusantium
                        optio, atque a enim ipsum deleniti facilis veritatis
                        placeat!
                    </p>
                )}
            </div>
            <div className="section ">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(4)}
                >
                    Food {collapse[4] ? '▴' : '▾'}
                </h2>
                {collapse[4] && (
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

export default CultureDetail
