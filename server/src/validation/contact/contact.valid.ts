import { Request, Response, NextFunction } from "express";

import { numbers } from "../../helper/regex";

const contactValid = (req: Request, res: Response, next: NextFunction) => {

    const { name, phone } = req.body

    if(!name || !phone) {
        return res.status(400).json({
            message: "Complete the contact fields."
        })
    }

    if(!numbers.test(phone)) {
        return res.status(400).json({
            message: "Enter only numbers on the phone field."
        })
    }

    next()
}

export default contactValid