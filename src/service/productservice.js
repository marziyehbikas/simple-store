import httpService from './httpService'
import config from './config.json'

export const getProducts = () => {
    return httpService.get(`${config.server}/products`)
}

export const addNewProduct = product => {
    return httpService.post(`${config.server}/products`, JSON.stringify(product))
}

export const editProduct = (productId, product) => {
    return httpService.put(`${config.server}/products/${productId}`, JSON.stringify(product))
}

export const removeProduct = productId => {
    return httpService.delete(`${config.server}/products/${productId}`)
}