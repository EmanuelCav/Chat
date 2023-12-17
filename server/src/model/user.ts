import { Schema, model, Types } from 'mongoose';

import { User } from 'interface/User';

const { ObjectId } = Types

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
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

export default model<User>('User', userSchema)