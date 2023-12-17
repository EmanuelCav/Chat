import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as userApi from "../../../../server/api/user.api";
import { actionLoginPhone } from '../../../../server/toolkit/user.toolkit';

import { IPhone } from '../../../../interface/User'

const InfoStart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: IPhone = {
    phone: ""
  }

  const [phoneData, setPhoneData] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPhoneData({ ...phoneData, [name]: value })
  }

  const getData = async () => {

    try {

      const { data } = await userApi.loginPhone(phoneData)

      dispatch(actionLoginPhone(data))

      navigate('/room')
      
    } catch (error) {
      console.log(error);
    }

  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData()
  }

  return (
    <div className='section-index-rigth'>
      <h1 className='title-start'>Stay in touch from wherever you are</h1>
      <p className='text-start'>Messages allows you to stay connected remote.
        <span>Enter your phone to start.</span>
      </p>
      <form onSubmit={handleSumbit}>
        <input type="text" name='phone' className='input-start' placeholder='PHONE NUMBER' value={phoneData.phone} onChange={handleChange} autoComplete='off' />
        <button className='button-start'>START</button>
      </form>
    </div>
  )
}

export default InfoStart