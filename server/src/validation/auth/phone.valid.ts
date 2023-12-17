import { Request, Response, NextFunction } from "express";

import { numbers } from "../../helper/regex";

const phoneValid = (req: Request, res: Response, next: NextFunction) => {

    const { phone } = req.body

    if(!phone) {
        return res.status(400).json({
            message: "Write your phone number."
        })
    }

    if(!numbers.test(phone)) {
        return res.status(400).json({
            message: "Enter only numbers."
        })
    }

    next()
}

export default phoneValid