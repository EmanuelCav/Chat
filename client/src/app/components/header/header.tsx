import { useLocation } from "react-router-dom";

import Logo from './components/logo'
import Navigation from './components/navigation'

const Header = () => {

  const location = useLocation()

  return (
    <div className='container-header' style={location.pathname === "/room" ? { display: 'none' } : {}}>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header