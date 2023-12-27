import { useRef } from 'react';
import { IoIosAdd, IoIosSettings, IoMdPerson } from "react-icons/io";

import { IContact } from "../../interface/User";
import { ContactsPropsType } from "../../types/props.types";

import Contact from "./components/contact";
import CreateContact from "./createContact";

const Contacts = ({ user, setIsCreateContact, isCreateContact, setIsShowContacts }: ContactsPropsType) => {

    const createContact = () => {
        setIsCreateContact(!isCreateContact)
    }

    const showContacts = () => {
        setIsShowContacts(true)
    }

    const contacts = useRef<IContact[] | undefined>(user.user.user?.contacts.filter(contact => contact.messages.length > 0))

    return (
        <div className="container-contacts">
            <div className="container-event-contacts">
                <IoIosAdd size={36} className="icon-contact" onClick={createContact} />
                <IoMdPerson size={36} className="icon-contact" onClick={showContacts} />
                <IoIosSettings size={36} className="icon-contact" />
            </div>
            <div className="contain-contacts">
                {
                    isCreateContact && <CreateContact user={user} setIsCreateContact={setIsCreateContact} />
                }
                {
                    contacts.current!.map((contact: IContact) => {
                        return <Contact contact={contact} key={contact._id} />
                    })
                }
            </div>
        </div>
    )
}

export default Contacts