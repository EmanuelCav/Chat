import { Request, Response, NextFunction } from "express";

const loginValid = (req: Request, res: Response, next: NextFunction) => {

    const { code } = req.body

    if(!code) {
        return res.status(400).json({
            message: "Write a code."
        })
    }

    next()
}

export default loginValid