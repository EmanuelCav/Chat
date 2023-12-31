import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ICreateMessage } from "../../../../interface/User";
import { ChatPropsType } from "../../../../types/props.types";

import { createMessageApi } from "../../../../server/api/message.api";
import { getContactChat, updateUser } from "../../../../server/toolkit/user.toolkit";
import { userApi } from "../../../../server/api/user.api";

const InputMessage = ({ contact, user }: ChatPropsType) => {

  const dispatch = useDispatch()

  const initialState: ICreateMessage = {
    message: ""
  }

  const [messageData, setMessageData] = useState<ICreateMessage>(initialState)

  const { message } = messageData

  const getUser = async () => {
    const { data } = await userApi(user.user?._id!, user.token!)
    dispatch(updateUser(data))
  }

  const getData = async () => {

    try {
      const { data } = await createMessageApi(messageData, contact._id!, user.token!)
      dispatch(getContactChat(data.contact))
      dispatch(updateUser(data.user))
      setMessageData({
        message: ""
      })
    } catch (error) {
      console.log(error);
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMessageData({ ...messageData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData()
  }

  useEffect(() => {
    getUser()
  }, [dispatch])

  return (
    <form className="form-message" onSubmit={handleSumbit}>
      <input type="text" name="message" style={{ width: '100%' }} placeholder="Write a message"
        autoFocus autoComplete="off" onChange={handleChange} value={message} />
    </form>
  )
}

export default InputMessage