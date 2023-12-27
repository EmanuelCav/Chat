import { IReducerUser } from "../interface/Reducer"

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
    user: IReducerUser;
    setIsShowContacts: (isShowContacts: boolean) => void;
}