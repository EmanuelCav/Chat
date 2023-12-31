import { useState } from "react";
import { useDispatch } from "react-redux";

import { ContactPropsType } from "../../../types/props.types";

import { getContactApi } from "../../../server/api/contact.api";
import { getContactChat } from "../../../server/toolkit/user.toolkit";

const Contact = ({ contact, user, setIsShowContacts }: ContactPropsType) => {

  const dispatch = useDispatch()

  const [currentContact, setCurrentContact] = useState<string>(user.contact._id!)

  const chatContact = async () => {

    try {
      const { data } = await getContactApi(contact._id!, user.user.token!)
      dispatch(getContactChat(data))

      setCurrentContact(data._id)
      setIsShowContacts!(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='contact-container' onClick={chatContact} style={currentContact === contact._id ? { background: '#fff' } : {}}>
      <img src={contact.user?.photo.image} alt="contact-photo" className='image-contact' />
      <p className='text-contact'>{contact.name}</p>
    </div>
  )
}

export default Contact