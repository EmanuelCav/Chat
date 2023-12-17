import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as userApi from "../../../../server/api/user.api";
import { actionLoginPhone } from '../../../../server/toolkit/user.toolkit';

import { ILogin, IPhone } from '../../../../interface/User'

const InfoStart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: IPhone = {
    phone: ""
  }

  const initialStateLogin: ILogin = {
    phone: "",
    password: ""
  }

  const [phoneData, setPhoneData] = useState<IPhone>(initialState)
  const [userData, setUserData] = useState<ILogin>(initialStateLogin)

  const { phone, password } = userData

  const [isLogin, setIsLogin] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (isLogin) {
      setUserData({ ...userData, [name]: value })
      return
    }

    setPhoneData({ ...phoneData, [name]: value })

  }

  const getData = async () => {

    try {

      const { data } = await userApi.loginPhoneApi(phoneData)

      dispatch(actionLoginPhone(data))

      setIsLogin(true)

      setUserData({
        phone: phoneData.phone,
        password: ""
      })

    } catch (error) {
      console.log(error);
    }

  }

  const getDataLogin = async () => {

    try {

      const { data } = await userApi.loginApi(userData)

      dispatch(actionLoginPhone(data))

      navigate('/room')

    } catch (error) {
      console.log(error);
    }

  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLogin) {
      getDataLogin()
      return
    }

    getData()

  }

  return (
    <div className='section-index-rigth'>
      <h1 className='title-start'>Stay in touch from wherever you are</h1>
      <p className='text-start'>Messages allows you to stay connected remote.
        <span>Enter your phone to start.</span>
      </p>
      <form onSubmit={handleSumbit}>
        <input type="text" name='phone' className='input-start' placeholder='PHONE NUMBER' value={isLogin ? phone : phoneData.phone}
          onChange={handleChange} autoComplete='off' disabled={isLogin} />
        {
          isLogin && <input type="password" name='password' className='input-start' placeholder='PASSWORD' value={password} onChange={handleChange} autoComplete='off' />
        }
        <button className='button-start'>START</button>
      </form>
    </div>
  )
}

export default InfoStart