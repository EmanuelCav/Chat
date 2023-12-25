import axios from 'axios'

import { ICode, IName, IPhone } from '../../interface/User'

import { host } from '../../config/config'

const api = axios.create({ baseURL: import.meta.env.DEV ? `${host}` : `${host}` })

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

export const nameApi = async (nameData: IName, id: string, token: string) => {
    return await api.put(`/users/name/${id}`, nameData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}
