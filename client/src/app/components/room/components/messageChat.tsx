import Message from "./components/message"
import InputMessage from "./components/inputMessage"

import { IMessage } from "../../../interface/User"
import { ChatPropsType } from "../../../types/props.types"

const MessageChat = ({ contact, user }: ChatPropsType) => {
    return (
        <div className="container-message-chat" style={contact ? { background: '#cfffcf' } : {}}>
            <div className="container-messages">
                {
                    contact.messages?.map((message: IMessage) => {
                        return <Message message={message} user={user} key={message._id} />
                    })
                }
            </div>
            <div className="container-input-message">
                {
                    contact && <InputMessage contact={contact} user={user} />
                }
            </div>
        </div>
    )
}

export default MessageChat