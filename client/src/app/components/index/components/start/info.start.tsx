import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ICode, IPhone } from '../../../../interface/User'
import { IReducer } from '../../../../interface/Reducer';

import { actionLogin, actionLoginPhone } from '../../../../server/toolkit/user.toolkit';
import { loginApi, loginPhoneApi } from '../../../../server/api/user.api'

const InfoStart = () => {

  const user = useSelector((state: IReducer) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: IPhone = {
    phone: ""
  }

  const initialStateCode: ICode = {
    code: ""
  }

  const [isPhone, setIsPhone] = useState<boolean>(false)

  const [phoneData, setPhoneData] = useState<IPhone>(initialState)
  const [codeData, setCodeData] = useState<ICode>(initialStateCode)

  const { phone } = phoneData
  const { code } = codeData

  const getData = async () => {

    try {
      const { data } = await loginPhoneApi(phoneData)
      dispatch(actionLoginPhone(data.user))
      setIsPhone(true)
    } catch (error) {
      console.log(error);
    }
  }

  const getDataLogin = async () => {

    try {
      const { data } = await loginApi(user.user.user!._id, codeData)
      dispatch(actionLogin(data))
      navigate('/room')
    } catch (error) {
      console.log(error);
    }
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (isPhone) {
      setCodeData({ ...codeData, [name]: value })
      return
    }

    setPhoneData({ ...phoneData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isPhone) {
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
        <input type="text" name='phone' className='input-start' placeholder='PHONE NUMBER' value={phone} autoComplete='off'
          onChange={handleChange} disabled={isPhone} />
        {
          isPhone && <input type="text" name='code' className='input-start' placeholder='CODE' value={code} autoComplete='off'
            onChange={handleChange} />
        }
        <button className='button-start'>START</button>
      </form>
    </div>
  )
}

export default InfoStart