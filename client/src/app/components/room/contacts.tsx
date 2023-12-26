import { IoIosAdd, IoIosSettings } from "react-icons/io";

import { IContact } from "../../interface/User";
import { ContactsPropsType } from "../../types/props.types";

import Contact from "./components/contact";
import CreateContact from "./createContact";

const Contacts = ({ user, setIsCreateContact, isCreateContact }: ContactsPropsType) => {

    const createContact = () => {
        setIsCreateContact(!isCreateContact)
    }

    return (
        <div className="container-contacts">
            <div className="container-event-contacts">
                <IoIosAdd size={36} className="icon-contact" onClick={createContact} />
                <IoIosSettings size={36} className="icon-contact" />
            </div>
            <div className="contain-contacts">
                {
                    isCreateContact && <CreateContact user={user} setIsCreateContact={setIsCreateContact} />
                }
                {
                    user.user.user?.contacts.map((contact: IContact) => {
                        return <Contact contact={contact} key={contact._id} />
                    })
                }
            </div>
        </div>
    )
}

export default Contacts