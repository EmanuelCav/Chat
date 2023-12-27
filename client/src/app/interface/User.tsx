export interface IUser {
    _id: string;
    name: string;
    surname: string;
    phone: string;
    photo: string;
    contacts: IContact[];
    code: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IPhone {
    phone: string;
}

export interface ICode {
    code: string;
}

export interface IContact {
    _id: string;
    name: string;
    user: IUser;
    createdBy: IUser;
    messages: any[];
    createdAt: string;
    updatedAt: string;
}

export interface IImage {
    _id: string;
    image: string;
    imageId: string;
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface IMessage {
    _id: string;
    message: string;
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface IName {
    name: string;
    surname: string;
}

export interface ICreateContact {
    phone: string;
    name: string;
}