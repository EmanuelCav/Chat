import { Request, Response } from "express";

import Message from '../model/message';
import Contact from '../model/contact';
import User from '../model/user';

export const createMessage = async (req: Request, res: Response): Promise<Response> => {

    const { message } = req.body
    const { id } = req.params

    try {

        const contact = await Contact.findById(id)

        if (!contact) {
            return res.status(400).json({ message: "Contact does not exists" })
        }

        const newMessage = new Message({
            message,
            user: req.user
        })

        const messageSaved = await newMessage.save()

        const contactMessage = await Contact.findByIdAndUpdate(id, {
            $push: {
                messages: messageSaved._id
            }
        }, {
            new: true
        })
            .populate({
                path: "user",
                select: "photo",
                populate: {
                    path: "photo"
                }
            })
            .populate({
                path: "messages",
                populate: {
                    path: "user",
                    select: "name photo",
                    populate: "photo"
                }
            })

        const user = await User.findById(req.user)
            .populate('photo')
            .populate({
                path: "contacts",
                populate: {
                    path: "user",
                    select: "photo phone",
                    populate: {
                        path: "photo"
                    }
                }
            })
            .select("-code")

        return res.status(200).json({
            user,
            contact: contactMessage
        })

    } catch (error) {
        throw error
    }

}