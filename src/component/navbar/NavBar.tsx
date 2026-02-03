import { useLocation, useNavigate } from "react-router-dom"
import { urlPaths } from "../../routing/urlPaths"
import { Menu, type MenuProps } from "antd"
import'./NavBar.css'

const NavBar = () => {
const {HOME_PATH, CONTACTUS_PATH, PROJECT_PATH} = urlPaths
const navigate = useNavigate()
const location = useLocation()
const redirectFunction = (e: string) =>{
if (e==='home'){
    navigate(HOME_PATH)
}
if(e==='project'){
    navigate(PROJECT_PATH)
}
if(e==='contact'){
    navigate(CONTACTUS_PATH)
}
}
const getSelectedKey = () =>{
    if(location.pathname.includes('home')) return['home']
    if(location.pathname.includes('project')) return['project']
    if(location.pathname.includes('contact-us')) return['contact']
}
const items: MenuProps[`items`] = [
    {label: 'Home', key:'home'},
    {label: 'Project', key:'project'},
    {label: 'Contact US', key:'contact'}
]
    return (
        <div className="navbar-conatiner">
            <Menu onClick={(e)=> redirectFunction(e.key)} mode="horizontal" items={items} className="menu-items" selectedKeys={getSelectedKey()}/>
            </div>
    )
}

export default NavBar