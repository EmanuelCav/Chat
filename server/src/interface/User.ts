import { Types } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    name: string;
    surname: string;
    phone: string;
    photo: string;
    password: string;
    code: string;
    contacts: IContact[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IContact {
    _id: Types.ObjectId;
    name: string;
    user: IUser;
    messages: IMessage[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IMessage {
    _id: Types.ObjectId;
    message: string;
    user: IUser;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IImage {
    _id: Types.ObjectId;
    image: string;
    imageId: string;
    user: IUser;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}