import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as HeaderLogo } from "../../images/header_logo.svg";
import { ReactComponent as SearchIcon } from "../../images/search_icon.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarMain">
        <HeaderLogo />
      </Link>
      <div className="navbarSide">
        <button className="button" onClick={() => {}}>
          <div className="searchBar">
            <SearchIcon style={{ height: "20px", width: "20px" }} />
            <span className="search">검색</span>
          </div>
        </button>

        <Link to="/join" style={{ textDecoration: "none" }}>
          <div className="navbarUser">Join</div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="navbarUser">Login</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
