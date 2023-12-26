import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { ICreateContact } from "../../interface/User";

import { createContactApi } from "../../server/api/contact.api";
import { updateUser } from "../../server/toolkit/user.toolkit";
import { CreateContactPropsType } from "../../types/props.types";

const CreateContact = ({ user, setIsCreateContact }: CreateContactPropsType) => {

    const dispatch = useDispatch()

    const initialState: ICreateContact = {
        phone: "",
        name: "",
    }

    const [contactData, setContactData] = useState<ICreateContact>(initialState)

    const { phone, name } = contactData

    const getData = async () => {

        try {
            const { data } = await createContactApi(contactData, user.user.token!)
            dispatch(updateUser(data.user))
            setIsCreateContact(false)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <form className="container-form-contact" onSubmit={handleSumbit}>
            <h2 className='title-name-form'>Add new contact</h2>
            <input type="text" name='phone' className='input-start' placeholder='PHONE' autoComplete='off' value={phone} onChange={handleChange} />
            <input type="text" name='name' className='input-start' placeholder='CONTACT NAME' autoComplete='off' value={name} onChange={handleChange} />
            <button className='button-start'>ADD</button>
        </form>
    )
}

export default CreateContact