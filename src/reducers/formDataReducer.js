function formDataReducer(state, action) {
    switch (action.type) {
        case 'input':
            if (action.name in state) {
                if (action.value === null || action.value === "") {
                    const {[action.name]: _, ...rest} = state
                    return rest
                } else {
                    return {...state, [action.name]: action.value}
                }
            }
            return {...state, [action.name]: action.value}
        case 'remove':
            return state.filter((image) => image.id !== action.id)
        default:
            throw new Error()
    }
}   
export default formDataReducer;