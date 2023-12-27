import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from "react-redux";

import { IName } from '../../interface/User'
import { IReducerUser } from '../../interface/Reducer'

import { nameApi } from '../../server/api/user.api'
import { updateUser } from '../../server/toolkit/user.toolkit';

const Name = ({ user }: { user: IReducerUser }) => {

    const dispatch = useDispatch()

    const initialState: IName = {
        name: "",
        surname: ""
    }

    const [nameData, setNameData] = useState<IName>(initialState)

    const { name, surname } = nameData

    const getData = async () => {

        try {

            const { data } = await nameApi(nameData, user.user.user?._id!, user.user.token!)
            dispatch(updateUser(data))
            

        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNameData({ ...nameData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <div className="container-absolute">
            <form className='container-form-name' onSubmit={handleSumbit}>
                <h2 className='title-name-form'>Write you name to continue</h2>
                <input type="text" name='name' className='input-start' placeholder='NAME' autoComplete='off' value={name} onChange={handleChange} />
                <input type="text" name='surname' className='input-start' placeholder='SURNAME' autoComplete='off' value={surname} onChange={handleChange} />
                <button className='button-start'>ACCEPT</button>
            </form>
        </div>
    )
}

export default Name