function listBuilderReducer(state, action) {
    switch (action.type) {
        case 'select':
            if (state != {}) {
                if (state.category === action.category && state.number === action.number && state.equipment === action.equipment) {
                    return {}
                } else {
                    return {
                        condition: action.condition,
                        number: action.number,
                        url: action.url,
                        equipment: action.equipment,
                        category: action.category
                    }
                }
            } else {
                return {
                    condition: action.condition,
                    number: action.number,
                    url: action.url,
                    equipment: action.equipment,
                    category: action.category
                }
            }
        case 'clear':
            return {}        
        default:
            throw new Error()
    }
}   
export default listBuilderReducer;