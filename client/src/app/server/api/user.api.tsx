import axios from 'axios'

import { ICode, IPhone } from '../../interface/User'

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const loginPhoneApi = async (phoneData: IPhone) => {
    return await api.post('/users', phoneData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginApi = async (id: string, codeData: ICode) => {
    return await api.post(`/users/${id}`, codeData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const registerApi = async () => {
    
}