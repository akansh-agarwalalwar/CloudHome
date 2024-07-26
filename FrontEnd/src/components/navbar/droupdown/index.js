import React, {useState, useEffect, useRef} from 'react';
import user from '../../../Assets/img/user.png';
import edit from '../../../Assets/img/edit.png';
import settings from '../../../Assets/img/settings.png';
import help from '../../../Assets/img/question.png';
import logout from '../../../Assets/img/log-out.png';
import "./style.css"
import { useDispatch } from 'react-redux';
import { appLogout } from '../../../store/slices/authSlice';
const DroupDown = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(appLogout());
  };


  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            
            <li className="dropdownItem"><img src={user}></img>My Profile</li>
            <li className="dropdownItem"><img src={edit}></img>Edit Profile</li>
            <li className="dropdownItem"><img src={settings}></img>Settings</li>
            <li className="dropdownItem"><img src={help}></img>Helps</li>

            <li onClick={handleLogout} className="dropdownItem"><img src={logout}></img>Logout </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default DroupDown;
