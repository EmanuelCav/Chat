import { Schema, model, Types } from 'mongoose';

import { IImage } from '../interface/User';

const { ObjectId } = Types

const imageSchema = new Schema({

    image: {
        type: String,
        default: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
    },

    imageId: String,

    user: {
        type: ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IImage>('Image', imageSchema)