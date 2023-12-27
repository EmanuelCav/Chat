import { Request, Response } from "express";

import User from '../model/user';
import Contact from '../model/contact';

import { modifyPhone } from "../helper/code";

export const createContact = async (req: Request, res: Response): Promise<Response> => {

    const { name, phone } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const contact = await User.findOne({ phone: originalPhone })
        .populate("contacts")
        .select("-code")

        if (!contact) {
            return res.status(400).json({ message: "Contact does not exists" })
        }

        const user = await User.findById(req.user)

        console.log(contact._id);
        console.log(user?.contacts);
        console.log(user?.contacts.find(u => u._id == contact._id));

        if(user?.contacts.find(u => u._id == contact._id)) {
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
        .populate("contacts")
        .select("-code")

        return res.status(200).json({
            message: "Contact added successfully",
            user: userUpdated
        })

    } catch (error) {
        throw error
    }

}