import { IUserInfo } from "./User";

export interface IReducer {
    user: IReducerUser;
}

export interface IReducerUser {
    user: IUserInfo;
    isLoggedIn: boolean;
}

