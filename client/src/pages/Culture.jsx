import { Link } from 'react-router-dom'
import { cultureList } from '../../data/culture'

const Culture = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Our Cultures</h1>

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {Object.keys(cultureList).map(culture => {
                    return (
                        <div key={culture}>
                            <div className="rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full rounded"
                                    src={cultureList[culture]['image']}
                                    alt={cultureList[culture]['name']}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        {cultureList[culture]['name']}
                                    </div>
                                    <p className="text-gray-700 text-base text-ellipsis h-20 overflow-hidden">
                                        {cultureList[culture]['description']}
                                    </p>
                                </div>
                                <div className="px-4 py-1 mb-4 bg-blue-700 w-max mx-auto text-white rounded cursor-pointer">
                                    <Link to={`/culture/${culture}`}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Culture
