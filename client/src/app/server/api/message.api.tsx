import axios from 'axios'

import { host } from '../../config/config'

import { ICreateMessage } from '../../interface/User'

const api = axios.create({ baseURL: import.meta.env.DEV ? `${host}` : `${host}` })

export const createMessageApi = async (messageData: ICreateMessage, id: string, token: string) => {
    return await api.patch(`/messages/contacts/${id}`, messageData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}
