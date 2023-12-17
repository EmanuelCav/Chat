export interface IUser {
    _id?: string;
    name?: string;
    surname?: string;
    phone?: string;
    photo?: string;
    contacts?: any[];
    createdAt?: string;
    updatedAt?: string;
}

export interface IPhone {
    phone: string;
}

export interface ILogin {
    phone: string;
    password: string;
}