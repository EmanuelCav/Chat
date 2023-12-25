import HeaderChat from "./components/headerChat"
import MessageChat from "./components/messageChat"

const Chat = () => {
    return (
        <div className="container-chat">
            <HeaderChat />
            <MessageChat />
        </div>
    )
}

export default Chat