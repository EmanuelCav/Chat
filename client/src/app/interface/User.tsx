export interface IUser {
    _id: string;
    name: string;
    surname: string;
    phone: string;
    photo: string;
    contacts: any[];
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
