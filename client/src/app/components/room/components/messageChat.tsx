import Message from "./components/message"
import InputMessage from "./components/inputMessage"

import { IContact, IMessage } from "../../../interface/User"

const MessageChat = ({ contact }: { contact: IContact }) => {
    return (
        <div className="container-message-chat" style={contact ? { background: '#cfffcf' } : {}}>
            <div className="container-messages">
                {
                    contact.messages?.map((message: IMessage) => {
                        return <Message message={message} key={message._id} />
                    })
                }
            </div>
            <div className="container-input-message">
                {
                    contact && <InputMessage />
                }
            </div>
        </div>
    )
}

export default MessageChat