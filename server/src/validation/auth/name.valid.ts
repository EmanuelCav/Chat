import { Request, Response, NextFunction } from "express";

import { letters } from "../../helper/regex";

const nameValid = (req: Request, res: Response, next: NextFunction) => {

    const { name, surname } = req.body

    if(!name || !surname) {
        return res.status(400).json({
            message: "Write your name and surname to continue."
        })
    }

    if(!letters.test(name) || !letters.test(surname)) {
        return res.status(400).json({
            message: "Enter only characters."
        })
    }

    next()
}

export default nameValid