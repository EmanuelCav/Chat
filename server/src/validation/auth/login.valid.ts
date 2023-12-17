import { Request, Response, NextFunction } from "express";

const loginValid = (req: Request, res: Response, next: NextFunction) => {

    const { password } = req.body

    if(!password) {
        return res.status(400).json({
            message: "Write a password."
        })
    }

    next()
}

export default loginValid