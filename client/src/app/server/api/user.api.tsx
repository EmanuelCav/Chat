import axios from 'axios'

import { IPhone } from '../../interface/User'

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const loginPhone = async (phoneData: IPhone) => {
    return await api.post('/loginphone', phoneData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}