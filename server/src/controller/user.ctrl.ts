import { Request, Response } from "express";
import { Twilio } from 'twilio';

import User from '../model/user';
import Contact from '../model/contact';
import Image from '../model/image';
import Message from '../model/message';

import { accountSid, authToken, phoneNumber } from "../config/user.config";

import { generateCode, modifyPhone } from "../helper/code";
import { generateToken } from "../helper/encrypt";

const client = new Twilio(accountSid, authToken)

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find().select("-code")

        return res.status(200).json(showUsers)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await User.findById(id)
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

        if (!showUser) {
            return res.status(400).json({ message: "User does not exists" })
        }

        return res.status(200).json(showUser)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const loginPhone = async (req: Request, res: Response): Promise<Response> => {

    const { phone } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const code = generateCode()

        const user = await User.findOne({
            phone: originalPhone
        }).select("-code")

        if (!user) {

            const newUser = new User({
                phone: originalPhone
            })

            const userSaved = await newUser.save()

            const newImage = new Image({
                user: userSaved._id
            })

            const imageSaved = await newImage.save()

            await User.findByIdAndUpdate(userSaved._id, {
                photo: imageSaved._id
            }, {
                new: true
            })

        }

        await client.messages.create({
            to: originalPhone,
            from: phoneNumber,
            body: `The code is: ${code}`
        })

        const userLogged = await User.findOne({
            phone: originalPhone
        })
            .select("phone")

        if (!userLogged) {
            return res.status(400).json({ message: "User does not exists" })
        }

        await User.findByIdAndUpdate(userLogged._id, {
            code
        }, {
            new: true
        })

        return res.status(200).json({
            user: userLogged,
            message: "Check your phone."
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { code } = req.body
    const { id } = req.params

    try {

        const user = await User.findById(id)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (code !== user.code) {
            return res.status(400).json({ message: "Code is wrong" })
        }

        const token = generateToken(user._id)

        const userLogged = await User.findById(id)
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
            user: userLogged,
            token
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id).select("-code")

        if (!user) {
            return res.status(200).json({
                message: "User does not exists."
            })
        }

        await Contact.deleteMany({
            createdBy: user._id
        })
        await Image.deleteOne({
            user: user._id
        })
        await Message.deleteMany({
            user: user._id
        })
        await User.findByIdAndDelete(id)

        return res.status(200).json({
            message: `User with phone ${user?.phone} was removed successfully.`
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const updateName = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { name, surname } = req.body

    try {

        const user = await User.findById(id).select("-code")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user._id != req.user) {
            return res.status(400).json({ message: "You cannot update the name" })
        }

        const userName = name.charAt(0).toUpperCase() + name.slice(1);
        const userSurname = surname.charAt(0).toUpperCase() + surname.slice(1);

        const userUpdated = await User.findByIdAndUpdate(id, {
            name: userName,
            surname: userSurname
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

        return res.status(200).json(userUpdated)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const updatePhoto = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        // const user = await User.findByIdAndDelete(id)

        return res.status(200).json({
            message: `updatePhoto`
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}