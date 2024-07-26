import "./styles.css";
import { useDispatch } from "react-redux";
import { appLogout } from "../../store/slices/authSlice";
import { BiSolidServer } from "react-icons/bi";
import DroupDown from "./droupdown";

const Navbar = () => {


  return (
    <div className="navbar-caontainer">
      <div className="SolidStore">
        <BiSolidServer size={22.75} />
        <p>Storage</p>
      </div>
      <input type="text" placeholder="Search here..." />
      <div className="profile-container">
        <p>Rohit Kumar</p>
        
        <div className="profile">
        <DroupDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
