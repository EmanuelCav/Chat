import { Request, Response, NextFunction } from "express";

import { letters, numbers } from "../../helper/regex";

const registerValid = (req: Request, res: Response, next: NextFunction) => {

    const { name, surname, phone, password, confirm } = req.body

    if(!name || !surname || !password || !confirm) {
        return res.status(400).json({
            message: "There are empty fields. Please complete."
        })
    }

    if(password.length < 6) {
        return res.status(400).json({
            message: "Password must have at least 6 characters."
        })
    }

    if(password != confirm) {
        return res.status(400).json({
            message: "Password do not match. Please check it."
        })
    }

    if(name.length >= 30 || surname.length >= 30) {
        return res.status(400).json({
            message: "Try don't write more than 30 characters in your name or surname."
        })
    }

    if(!letters.test(name) || !letters.test(surname)) {
        return res.status(400).json({
            message: "Try don't write symbols and numbers in your name and surname."
        })
    }

    if(!numbers.test(phone)) {
        return res.status(400).json({
            message: "Try don't write symbols in your phone. Only numbers"
        })
    }

    next()
}

export default registerValid