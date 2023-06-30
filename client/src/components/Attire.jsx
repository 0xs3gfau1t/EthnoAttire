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
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-xl bold">Male</h1>
                {attire['male'].map(item => {
                    return <h1>{item['name']}</h1>
                })}
                <h1 className="text-xl bold">Female</h1>
                {attire['female'].map(item => {
                    return <h1 className="ml-2">{item['name']}</h1>
                })}
            </div>
        </div>
    )
}

export default Attire
