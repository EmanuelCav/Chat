import axios from 'axios'

import { ILogin, IPhone } from '../../interface/User'

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const loginPhoneApi = async (phoneData: IPhone) => {
    return await api.post('/loginphone', phoneData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginApi = async (userData: ILogin) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const registerApi = async () => {
    
}