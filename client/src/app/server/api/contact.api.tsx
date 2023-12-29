import axios from 'axios'

import { host } from '../../config/config'

import { ICreateContact } from '../../interface/User'

const api = axios.create({ baseURL: import.meta.env.DEV ? `${host}` : `${host}` })

export const createContactApi = async (contactData: ICreateContact, token: string) => {
    return await api.patch('/contacts', contactData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getContactApi = async (id: string, token: string) => {
    return await api.get(`/contacts/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}
