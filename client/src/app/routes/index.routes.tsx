
import Auth from '../components/index/auth'
import Group from '../components/index/group'
import Media from '../components/index/media'
import Start from '../components/index/start'

const Index = () => {
  return (
    <div className='container-index'>
      <Auth />
      <Start />
      <Group />
      <Media />
    </div>
  )
}

export default Index