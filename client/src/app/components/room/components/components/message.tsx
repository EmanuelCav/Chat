import { IMessage } from "../../../../interface/User"

const Message = ({ message }: { message: IMessage }) => {
  return (
    <div>
        <p>{message.message}</p>
    </div>
  )
}

export default Message