import { useState } from "react";

import Auth from '../components/index/auth'
import Group from '../components/index/group'
import Media from '../components/index/media'
import Start from '../components/index/start'

const Index = () => {

  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <div className='container-index'>
      {
        isAuth && <Auth />
      }
      <Start setIsAuth={setIsAuth} />
      <Group />
      <Media />
    </div>
  )
}

export default Index