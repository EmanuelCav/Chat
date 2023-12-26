import { useState } from "react";
import { useSelector } from 'react-redux';

import Name from '../components/room/name';
import Chat from "../components/room/chat"
import Contacts from "../components/room/contacts"

import { IReducer } from '../interface/Reducer';

const Room = () => {

  const user = useSelector((state: IReducer) => state.user)

  const [isCreateContact, setIsCreateContact] = useState<boolean>(false)

  return (
    <div className="container-room">
      {
        (!user.user.user?.name || !user.user.user?.surname) &&
        <Name user={user} />
      }
      <Contacts user={user} setIsCreateContact={setIsCreateContact} isCreateContact={isCreateContact} />
      <Chat />
    </div>
  )
}

export default Room