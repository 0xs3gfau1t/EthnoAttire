import { ornaments } from '../../data/ornaments'

const inferEthnicity = detections => {
    const totalConf = detections.reduce((accum, value) => {
        const culture = ornaments[value.classId].culture
        return {
            ...accum,
            [culture]: (accum[value.classId] || 0) + value.confidence,
        }
    }, {})

    const entries = Object.entries(totalConf)
    console.log({ detections, totalConf, entries })
    if (!entries || entries.length == 0) return null

    let max = { culture: entries[0][0], value: entries[0][1] }
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] > max.value) {
            max.value = entries[i][1]
            max.culture = entries[i][0]
        }
    }
    return max.culture
}

export default inferEthnicity
