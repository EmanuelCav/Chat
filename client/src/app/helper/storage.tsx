import { storage } from "../config/config"

export const isStorage = () => {

    const data = JSON.parse(localStorage.getItem(`${storage}`) as string)

    if (data) {
        return JSON.parse(data.user).isLoggedIn
    }

    return false

}