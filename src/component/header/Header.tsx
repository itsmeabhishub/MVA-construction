import { useNavigate } from "react-router-dom";
import { urlPaths } from "../../routing/urlPaths";
import "./Header.css";
import NavBar from "../navbar/NavBar";

const Header = () => {
  const { HOME_PATH } = urlPaths;
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(HOME_PATH);
  };

  return (
    <div className="main-header">
      <div className="main-header-left" onClick={redirectToHome}>
        <img
          src="https://res.cloudinary.com/dikezuoz5/image/upload/v1770570946/logo_2_mogenf.png"
          alt="MVA Construction and Infratech Logo"
          className="header-logo"
        />
        <span className="hedaer-title">MVA Construction and Infratech</span>
      </div>

      <div className="main-header-right">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
