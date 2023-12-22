import { Schema, model, Types } from 'mongoose';

import { IUser } from 'interface/User';

const { ObjectId } = Types

const userSchema = new Schema({

    name: {
        type: String,
        trim: true
    },
    surname: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        trim: true
    },
    photo: {
        type: ObjectId,
        ref: 'Image'
    },
    contacts: [{
        type: ObjectId,
        ref: 'Contact'
    }],

}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)