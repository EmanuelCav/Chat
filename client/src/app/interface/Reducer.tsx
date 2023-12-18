import { IUser } from "./User";

export interface IReducerUser {
    user: IUser;
    isLoggedIn: boolean;
    phone?: string;
}