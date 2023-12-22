import { Schema, model, Types } from 'mongoose';

import { IMessage } from '../interface/User';

const { ObjectId } = Types

const messageSchema = new Schema({
    
    message: {
        type: String,
        required: true,
        trim: true
    },
    
    user: {
        type: ObjectId,
        ref: 'User'
    }
    
}, {
    timestamps: true,
    versionKey: false
})

export default model<IMessage>('Message', messageSchema)