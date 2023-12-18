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
        type: String,
        trim: true,
        default: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
    },
    contacts: [{
        type: ObjectId,
        ref: 'User'
    }],

}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)