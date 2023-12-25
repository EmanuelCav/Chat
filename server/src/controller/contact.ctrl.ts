import { Request, Response } from "express";

import User from '../model/user';

export const createContact = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createContact" })
        
    } catch (error) {
        throw error
    }

}