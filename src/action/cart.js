let cartItems = []

const storage = (products) => {
    localStorage.setItem('cart', JSON.stringify(products))
}

export const addProduct = (product) => {
    return async dispatch => {
        const productItem = {
            product,
            count: 1,
            checkout: false
        }

        if (!cartItems.find(item => item.product == product)) {
            cartItems.push(productItem)
        } else {
            const index = cartItems.findIndex(item => item.product === product)
            cartItems[index].count++
        }

        // storage(cartItems)
        await dispatch({ type: 'ADD-PRODUCT', payload: cartItems })
    }
}

const sumItems = (products) => {
    let itemCount = products.reduce((total, item) => total + item.count, 0);
    let total = products.reduce((total, item) => total + item.product.price * item.count, 0).toFixed(2);
    return total
}

export const checkout = () => {
    return async (dispatch, getState) => {
        const cart = getState().cart
        cart.map(item => item.checkout = true)

        let total = sumItems(cart)

        cart.splice(0, cart.length)
        cartItems.splice(0, cartItems.length)
        // localStorage.removeItem('cart')

        await dispatch({ type: 'CHECKOUT', payload: total })
    }
}

export const increase = product => {
    return async (dispatch, getState) => {
        const cart = getState().cart
        let find = cart.find(item => item.product === product)
        if (find) {
            let index = cart.findIndex(item => item.product === product)
            cart[index].count++
        }

        // storage(cart)
        await dispatch({ type: 'INCREASE', payload: cart })
    }
}

export const decrease = (product) => {
    return async (dispatch, getState) => {
        const cart = getState().cart

        let index = cart.findIndex(item => item.product === product)
        if (cart[index].count > 1) cart[index].count--

        // storage(cart)
        await dispatch({ type: 'DECREASE', payload: cart })
    }
}

export const removeProduct = (product) => {
    return async (dispatch, getState) => {
        const cart = getState().cart
        let find = cart.find(item => item.product === product)
        if (find) {
            let index = cart.findIndex(item => item.product === product)
            cart.splice(index, 1)
        }
        
        storage(cart)
        await dispatch({ type: 'REMOVE_PRODUCT', payload: cart })
    }
}