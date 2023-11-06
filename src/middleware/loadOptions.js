import data from '../data/testingoptiondata.json' assert { type: "json" }
function loadOptions(type, param=null) {
    switch (type) {
        case 'equipmentCategory':
            var output = []
            for (let key in data.equipmentCategories) {
                output.push(key)
            }
            return output
        case 'equipmentCategorySearch':
            output = ""
            for (let key in data.equipmentCategories) {
                for (let key2 in data.equipmentCategories[key]) {
                    data.equipmentCategories[key][key2].forEach((item) => {
                        if (item === param) {
                            console.log(key)
                            output = key
                        }
                    }
                    )
                }
            }
            return output
        case 'equipment':
            var output = []
            for (let key in data.equipmentCategories) {
                for (let key2 in data.equipmentCategories[key]) {
                    data.equipmentCategories[key][key2].forEach((item) => {
                        output.push(item)
                    })
                }
            }
            return output
        case 'equipmentTypeWithCategory':
            var output = []
            if (param === "") {
                for (let key in data.equipmentCategories) {
                    for (let key2 in data.equipmentCategories[key]) {
                        data.equipmentCategories[key][key2].forEach((item) => {
                            output.push(item)
                        })
                    }
                }
            } else {
                for (let key in data.equipmentCategories[param]) {
                    data.equipmentCategories[param][key].forEach((item) => {
                        output.push(item)
                    })
                }
            }
            return output
        case 'belligerent':
            var output = []
            for (let key in data.belligerents) {
                output.push(key)
            }
            return output
        case 'unitWithBelligerent':
            var output = []
            if (param === "") {
                for (let key in data.belligerents) {
                    for (let key2 in data.belligerents[key]) {
                        data.belligerents[key][key2].forEach((item) => {
                            output.push(item)
                        })
                    }
                }
            } else {
                for (let key in data.belligerents[param]) {
                    data.belligerents[param][key].forEach((item) => {
                        output.push(item)
                    })
                }
            }
            return output

        case 'belligerentSearch':
            output = ""
            for (let key in data.belligerent) {
                for (let key2 in data.belligerent[key]) {
                    data.belligerent[key][key2].forEach((item) => {
                        if (item === param) {
                            console.log(key)
                            output = key
                        }
                    }
                    )
                }
            }
            return output
        default:
            throw new Error()
    }
}

//console.log(loadOptions('equipment'))
export default loadOptions