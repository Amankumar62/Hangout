import { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Search } from "../search/Search";
import { useNavigate } from "react-router";
export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { username, profileImg } = user;
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav-container">
        <img
          className="nav-brand-logo"
          src={require("../../images/logo.png")}
          alt="hangout logo"
        />
        <Search />
        <img
          className="nav-user-image"
          src={profileImg}
          alt="user"
          onClick={() => navigate(`/profile/${username}`)}
        />
      </nav>
    </>
  );
};
