import { IReducerUser } from "../interface/Reducer"
import { IContact, IUserInfo } from "../interface/User";

export type ContactsPropsType = {
    user: IReducerUser;
    setIsCreateContact: (isCreateContact: boolean) => void;
    isCreateContact: boolean;
    setIsShowContacts: (isShowContacts: boolean) => void;
}

export type CreateContactPropsType = {
    user: IReducerUser;
    setIsCreateContact: (isCreateContact: boolean) => void;
}

export type AllContactPropsType = {
    allContacts: IContact[];
    setIsShowContacts: (isShowContacts: boolean) => void;
    user: IReducerUser;
}

export type ContactPropsType = {
    user: IReducerUser;
    contact: IContact;
    setIsShowContacts?: (isShowContacts: boolean) => void;
}

export type ChatPropsType = {
    contact: IContact;
    user: IUserInfo;
}