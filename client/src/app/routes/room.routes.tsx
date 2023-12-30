import { useState } from "react";
import { useSelector } from 'react-redux';

import Name from '../components/room/name';
import Chat from "../components/room/chat"
import Contacts from "../components/room/contacts"
import AllContacts from "../components/room/allContacts";

import { IReducer } from '../interface/Reducer';

const Room = () => {

  const user = useSelector((state: IReducer) => state.user)

  const [isCreateContact, setIsCreateContact] = useState<boolean>(false)
  const [isShowContacts, setIsShowContacts] = useState<boolean>(false)

  return (
    <div className="container-room">
      {
        (!user.user.user?.name || !user.user.user?.surname) &&
        <Name user={user} />
      }
      {
        isShowContacts && <AllContacts user={user} allContacts={[...user.user.user?.contacts.sort((a, b) => a.name!.localeCompare(b.name!))!]} setIsShowContacts={setIsShowContacts} />
      }
      <Contacts user={user} setIsCreateContact={setIsCreateContact} isCreateContact={isCreateContact} setIsShowContacts={setIsShowContacts} />
      <Chat contact={user.contact} />
    </div>
  )
}

export default Room