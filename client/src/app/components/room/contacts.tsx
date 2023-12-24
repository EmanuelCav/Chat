import { IoIosAdd, IoIosSettings } from "react-icons/io";

import { IReducerUser } from "../../interface/Reducer";
import { IContact } from "../../interface/User";

import Contact from "./components/contact";

const Contacts = ({ user }: { user: IReducerUser }) => {
    return (
        <div className="container-contacts">
            <div className="container-event-contacts">
                <IoIosAdd size={36} className="icon-contact" />
                <IoIosSettings size={36} className="icon-contact" />
            </div>
            <div className="contain-contacts">
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