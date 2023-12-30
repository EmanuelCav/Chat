import HeaderChat from "./components/headerChat"
import MessageChat from "./components/messageChat"

import { ChatPropsType } from "../../types/props.types"

const Chat = ({ contact, user }: ChatPropsType ) => {
    return (
        <div className="container-chat">
            <HeaderChat contact={contact} />
            <MessageChat contact={contact} user={user} />
        </div>
    )
}

export default Chat