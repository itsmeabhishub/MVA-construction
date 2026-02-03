import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import { urlPaths } from './urlPaths'
import Home from '../component/home/Home'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Project from '../component/project/Project'
import ContactUs from '../component/contact/ContactUs'
const PublicRoutes = () => {
    const { HOME_PATH, MAIN_PATH, PROJECT_PATH,CONTACTUS_PATH } = urlPaths
    const redirectPath : any= HOME_PATH
    return (
        <Router>
            <Header />
            <div className="main-container">
                <div className="bg-image">
            <Routes>
                <Route 
                path={MAIN_PATH} 
                element={<Navigate to={redirectPath} 
                replace />} />
                 <Route path="*" element={<Navigate to ={redirectPath} replace />} />
                <Route path={HOME_PATH} element={<Home />}/>
                <Route path={PROJECT_PATH} element={<Project />}/>
                <Route path={CONTACTUS_PATH} element={<ContactUs />}/>
            </Routes>
            </div>
            </div>
            <Footer />
        </Router>
    )
}

export default PublicRoutes