import httpService from './httpService'
import config from './config.json'

export const loginUser = user => {
    return httpService.post(`${config.server}/auth/login`, JSON.stringify(user))
}