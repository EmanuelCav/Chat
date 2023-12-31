import { MessagePropsType } from "../../../../types/props.types"

const Message = ({ message, user }: MessagePropsType) => {
  return (
    <div className="contain-message">
      <div className="container-message" style={message.user._id === user.user?._id ? { float: 'right' } : { float: 'left' }}>
        <p className="message-text">{message.message}</p>
      </div>
    </div>
  )
}

export default Message