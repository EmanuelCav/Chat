import { IReducerUser } from "../interface/Reducer"

export type ContactsPropsType = {
    user: IReducerUser;
    setIsCreateContact: (isCreateContact: boolean) => void;
    isCreateContact: boolean;
}

export type CreateContactPropsType = {
    user: IReducerUser;
    setIsCreateContact: (isCreateContact: boolean) => void;
}