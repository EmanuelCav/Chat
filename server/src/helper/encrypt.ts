import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

import { tokenSecret } from '../config/user.config';

export const hashPassword = async (password: string): Promise<string> => {

    const salt = await bcryptjs.genSalt(8)
    return await bcryptjs.hash(password, salt)

}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {

    return await bcryptjs.compare(password, hash)

}

export const generateToken = (id: Types.ObjectId): string => {

    return jwt.sign({ id }, `${tokenSecret}`, {
        expiresIn: '7d'
    })

}