import { Schema, model, Types } from 'mongoose';

import { IContact } from '../interface/User';

const { ObjectId } = Types

const contactSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    messages: [{
        type: ObjectId,
        ref: 'Message'
    }],

    user: {
        type: ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IContact>('Contact', contactSchema)