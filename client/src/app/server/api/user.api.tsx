import axios from 'axios'

import { ICode, IPhone } from '../../interface/User'

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
