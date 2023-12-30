import HeaderChat from "./components/headerChat"
import MessageChat from "./components/messageChat"

import { IContact } from "../../interface/User"

const Chat = ({ contact }: { contact: IContact }) => {
    return (
        <div className="container-chat">
            <HeaderChat contact={contact} />
            <MessageChat contact={contact} />
        </div>
    )
}

export default Chat