import { getProducts, addNewProduct, editProduct } from './../service/productservice';
import { toast } from 'react-toastify';
import { removeProduct } from './cart';

export const getAllProducts = () => {
    return async dispatch => {
        const { data } = await getProducts()
        await dispatch({ type: 'GET_PRODUCTS', payload: data })
    }
}

export const newProduct = product => {
    return async dispatch => {
        const { data } = await addNewProduct(product)
        await dispatch({ type: 'NEW_PRODUCT', payload: data })
    }
}

export const updateProduct = (productId, product) => {
    return async (dispatch, getState) => {
        const products = [...getState().products]
        const filteredProducts = products.filter(product => product.id !== productId)
        console.log('filteredProducts', filteredProducts);
        try {
            const { data, status } = await editProduct(productId, product)
            if (status === 200) {
                toast.success("Product Updated")
                await dispatch({ type: "UPDATE_PRODUCT", payload: [...filteredProducts, data] })
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_PRODUCT", payload: [...products] })
            console.log(ex);
        }
    }
}

export const deleteProduct = productId => {
    return async (dispatch, getState) => {
        const products = [...getState().products]
        const filteredProducts = products.filter(product => product.id !== productId)

        try {
            const { status } = await removeProduct(productId)
            await dispatch({ type: "DELETE_PRODUCT", payload: [...filteredProducts] })
            toast.success('Product Removed')
            
        } catch (ex) {
            await dispatch({ type: "DELETE_PRODUCT", payload: [...products] })
        }
    }
}