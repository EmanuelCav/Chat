import { Types } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    name: string;
    surname: string;
    phone: string;
    photo: string;
    password: string;
    code: string;
    contacts: any[];
    createdAt: string;
    updatedAt: string;
}