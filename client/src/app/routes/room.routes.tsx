import { useSelector } from 'react-redux';

import Chat from "../components/room/chat"
import Contacts from "../components/room/contacts"

import { IReducer } from '../interface/Reducer';

const Room = () => {
  
  const user = useSelector((state: IReducer) => state.user)

  return (
    <div className="container-room">
      <Contacts user={user} />
      <Chat />
    </div>
  )
}

export default Room