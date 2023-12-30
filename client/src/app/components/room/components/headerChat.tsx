import { IContact } from "../../../interface/User"

const HeaderChat = ({ contact }: { contact: IContact }) => {
    return (
        <div className="container-header-chat">
            <img src={contact.user?.photo.image} alt="contact-photo" className="contact-chat-photo" />
            <p className="contact-chat-name">{contact.name}</p>
        </div>
    )
}

export default HeaderChat