import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Twilio } from 'twilio';

import User from '../model/user';

import { accountSid, authToken, phoneNumber, tokenSecret } from "../config/user.config";

import { generateCode, modifyPhone } from "../helper/code";
import { comparePassword, generateToken, hashPassword } from "../helper/encrypt";

const client = new Twilio(accountSid, authToken)

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find().select("-password")

        return res.status(200).json(showUsers)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { phone } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const showUser = await User.findOne({ phone: originalPhone }).select("-password")

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

        const user = await User.findOne({ phone: originalPhone }).select("-password")

        if (!user) {

            var code = generateCode()

            await client.messages.create({
                to: originalPhone,
                from: phoneNumber,
                body: `The code is: ${code}`
            })

            return res.status(200).json({
                originalPhone,
                code,
                message: "Check your phone."
            })
        }

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { phone, password } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const user = await User.findOne({ phone: originalPhone }).select("-password")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const isPasswordValid = await comparePassword(password, user?.password!)

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Password is incorrect."
            })
        }

        const token = generateToken(user._id)

        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { name, surname, phone, password } = req.body

    const originalPhone = modifyPhone(phone)

    try {

        const userExists = await User.findOne({ phone: originalPhone }).select("-password")

        if (userExists) {
            return res.status(200).json({
                message: "Phone is already registered."
            })
        }

        var pass = await hashPassword(password)

        const newUser = new User({
            name,
            surname,
            phone: originalPhone,
            password: pass
        })

        const user = await newUser.save()

        const token = generateToken(user._id)

        return res.status(200).json({
            user,
            token,
            message: "Welcome! Now you can chat with your contacts."
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

        const user = await User.findById(id).select("-password")

        if (!user) {
            return res.status(200).json({
                message: "User does not exists."
            })
        }

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