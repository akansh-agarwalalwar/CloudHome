import "./styles.css";
import { useDispatch } from "react-redux";
import { appLogout } from "../../store/slices/authSlice";
import { BiSolidServer } from "react-icons/bi";
import DroupDown from "./droupdown";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <BiSolidServer size={24} />
        <p className="logo-text">Storage</p>
      </div>
      <input className="search-input" type="text" placeholder="Search here..." />
      <div className="profile-container">
        <p className="profile-name">Akansh Agarwal</p>
        <div className="profile-dropdown">
          <DroupDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
