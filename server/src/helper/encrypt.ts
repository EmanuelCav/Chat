import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';

import { tokenSecret } from '../config/user.config';

export const generateToken = (id: Types.ObjectId): string => {

    return jwt.sign({ id }, `${tokenSecret}`, {
        expiresIn: '7d'
    })

}