import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Group from '../components/index/group'
import Media from '../components/index/media'
import Start from '../components/index/start'

import { isStorage } from "../helper/storage";

const Index = () => {

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {      
      if(isStorage()) {
        navigate('/room')
      }
    })()
  }, [])

  return (
    <div className='container-index'>
      <Start />
      <Group />
      <Media />
    </div>
  )
}

export default Index