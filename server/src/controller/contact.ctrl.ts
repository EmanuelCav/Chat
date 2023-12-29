import { Request, Response } from "express";

import User from '../model/user';
import Contact from '../model/contact';

import { modifyPhone } from "../helper/code";

export const getContact = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const contact = await Contact.findById(id)
            .populate({
                path: "user",
                select: "photo",
                populate: {
                    path: "photo"
                }
            })

        if (!contact) {
            return res.status(400).json({ message: "Contact does not exists" })
        }

        return res.status(200).json(contact)

    } catch (error) {
        throw error
    }

}

export const createContact = async (req: Request, res: Response): Promise<Response> => {

    const { name, phone } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const contact = await User.findOne({ phone: originalPhone })
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

        if (!contact) {
            return res.status(400).json({ message: "Contact does not exists" })
        }

        const user = await User.findById(req.user)
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

        if (user?.contacts.find(u => u.user.phone == originalPhone)) {
            return res.status(400).json({ message: "Contact already exists" })
        }

        const newContact = new Contact({
            user: contact._id,
            createdBy: req.user,
            name
        })

        const contactSaved = await newContact.save()

        const userUpdated = await User.findByIdAndUpdate(req.user, {
            $push: {
                contacts: contactSaved._id
            }
        }, {
            new: true
        })
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
            message: "Contact added successfully",
            user: userUpdated
        })

    } catch (error) {
        throw error
    }

}