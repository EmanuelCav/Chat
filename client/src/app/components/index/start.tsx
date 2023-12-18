import InfoStart from './components/start/info.start'
import LogoStart from './components/start/logo.start'

const Start = ({ setIsAuth }: { setIsAuth: (isAuth: boolean) => void }) => {
  return (
    <div className='container-section-index' style={{ background: '#8f8', marginTop: '72px' }}>
      <LogoStart />
      <InfoStart setIsAuth={setIsAuth} />
    </div>
  )
}

export default Start