import { useSelector } from 'react-redux';

import Name from '../components/room/name';
import Chat from "../components/room/chat"
import Contacts from "../components/room/contacts"

import { IReducer } from '../interface/Reducer';

const Room = () => {

  const user = useSelector((state: IReducer) => state.user)

  return (
    <div className="container-room">
      {
        (!user.user.user?.name || !user.user.user?.surname) &&
        <Name user={user} />
      }
      <Contacts user={user} />
      <Chat />
    </div>
  )
}

export default Room