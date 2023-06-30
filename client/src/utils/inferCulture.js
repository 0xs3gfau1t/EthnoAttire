import { ornaments } from '../../data/ornaments'

const inferEthnicity = detections => {
    const mapOfCultureToCultureId = {}
    const totalConf = detections?.reduce((accum, value) => {
        const { culture, cultureId } = ornaments[value.classId]
        mapOfCultureToCultureId[culture] = cultureId
        if (culture == 'all') return accum
        return {
            ...accum,
            [culture]: (accum[value.classId] || 0) + value.confidence,
        }
    }, {})

    const entries = Object.entries(totalConf || {})
    if (!entries || entries.length == 0) return null

    let max = { culture: entries[0][0], value: entries[0][1] }
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] > max.value) {
            max.value = entries[i][1]
            max.culture = entries[i][0]
        }
    }
    return { name: max.culture, id: mapOfCultureToCultureId[max.culture] }
}

export default inferEthnicity
