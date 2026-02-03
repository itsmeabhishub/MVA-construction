import { useNavigate } from 'react-router-dom'
import { urlPaths } from '../../routing/urlPaths'
import './Header.css'
import NavBar from '../navbar/NavBar'

const Header = () => {
    const {HOME_PATH} = urlPaths
    const navigate = useNavigate()
    const redirectToHome =() =>{
        navigate(HOME_PATH)
    }
  return (
    <div className="main-header">
            <div className="main-header-left"> 
                <span onClick={redirectToHome} className='hedaer-title'>MVA Construction </span></div>
            <div className="main-header-right"><NavBar /></div>
        </div>
  )
}

export default Header