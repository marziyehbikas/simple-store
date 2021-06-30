export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD-PRODUCT':
            return [...action.payload]
        case 'INCREASE':
            return [...action.payload]
        case 'DECREASE':
            return [...action.payload]
        case 'REMOVE_PRODUCT':
            return [...action.payload]
        default:
            return state
    }
}

export const cechoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHECKOUT':
            return action.payload
        default:
            return state
    }
}