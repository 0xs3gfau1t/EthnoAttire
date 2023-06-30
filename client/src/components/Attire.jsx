import { ornaments } from '../../data/ornaments'

const Attire = ({ culture }) => {
    let attire = { male: [], female: [] }

    for (let i = 0; i < Object.keys(ornaments).length; i++) {
        if (
            ornaments[i]['culture'] == culture ||
            ornaments[i]['culture'] == 'all'
        ) {
            if (ornaments[i]['gender'] == 'male')
                attire['male'].push(ornaments[i])
            if (ornaments[i]['gender'] == 'female')
                attire['female'].push(ornaments[i])
            if (ornaments[i]['gender'] == 'both') {
                attire['female'].push(ornaments[i])
                attire['male'].push(ornaments[i])
            }
        }
    }
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col ">
                <h1 className="text-2xl italic">Male</h1>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {attire['male'].map(item => {
                        return (
                            <div key={item['name']}>
                                <div className="rounded shadow-lg">
                                    <img
                                        className="w-full rounded"
                                        src={item['image']}
                                        alt={item['name']}
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            {item['name']}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            {item['description']}
                                        </p>
                                    </div>
                                    <div className="px-4 py-1 mb-4 bg-green-700 w-max mx-auto text-white rounded cursor-pointer">
                                        {/* <Link to={`/info/culture/${culture}`}> */}
                                        Buy Now
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className="text-2xl italic">Female</h1>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {attire['female'].map(item => {
                        return (
                            <div
                                className="rounded shadow-lg"
                                key={item['name']}
                            >
                                <img
                                    className="w-full rounded"
                                    src={item['image']}
                                    alt={item['name']}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        {item['name']}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        {item['description']}
                                    </p>
                                </div>
                                <div className="px-4 py-1 mb-4 bg-green-600 w-max mx-auto text-white rounded cursor-pointer">
                                    {/* <Link to={`/info/culture/${culture}`}> */}
                                    Buy Now
                                    {/* </Link> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Attire
