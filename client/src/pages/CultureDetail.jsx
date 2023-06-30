import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Attire from '../components/Attire'
import Destinations from '../components/Destination'
import Map from './Map'
import { cultureList } from '../../data/culture'

const CultureDetail = () => {
    const [collapse, setCollapse] = useState([true, false, false, false])
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
                <Destinations culture={id} />
            </div>
            <div className="section">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(0)}
                >
                    Description {collapse[0] ? '▴' : '▾'}
                </h2>
                {collapse[0] && <p>{cultureList[id]['description']}</p>}
            </div>
            <div className="section">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(1)}
                >
                    Traditional Attire {collapse[1] ? '▴' : '▾'}
                </h2>
                {collapse[1] && <Attire culture={cultureList[id]['name']} />}
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
            <div className="section ">
                <h2
                    className="text-xl cursor-pointer"
                    onClick={e => updateCol(3)}
                >
                    Food {collapse[3] ? '▴' : '▾'}
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
        </div>
    )
}

export default CultureDetail
