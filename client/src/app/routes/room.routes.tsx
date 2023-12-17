import Chat from "../components/room/chat"
import Contacts from "../components/room/contacts"

const Room = () => {
  return (
    <div className="container-room">
      <Contacts />
      <Chat />
    </div>
  )
}

export default Room