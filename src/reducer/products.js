export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return [...action.payload]
        case 'NEW_PRODUCT':
            return [action.payload]
        case 'UPDATE_PRODUCT':
            return [...action.payload]
        case 'DELETE_PRODUCT':
            return [...action.payload]
        default:
            return state
    }
}

