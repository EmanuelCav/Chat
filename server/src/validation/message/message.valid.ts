import { Request, Response, NextFunction } from "express";

const messageValid = (req: Request, res: Response, next: NextFunction) => {

    const { message } = req.body

    if(!message) {
        return res.status(400).json({
            message: "Message does not exists."
        })
    }

    next()
}

export default messageValid