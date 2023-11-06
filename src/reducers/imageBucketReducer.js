function imageBucketReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, {id: action.id, image: action.image, source: action.source}]
        case 'remove':
            return state.filter((image) => image.id !== action.id)
        default:
            throw new Error()
    }
}   
export default imageBucketReducer;