import React, { useState, useEffect, useRef } from 'react';
import user from '../../../Assets/img/user.png';
import edit from '../../../Assets/img/edit.png';
import settings from '../../../Assets/img/settings.png';
import help from '../../../Assets/img/question.png';
import logout from '../../../Assets/img/log-out.png';
import "./style.css";
import { useDispatch } from 'react-redux';
import { appLogout } from '../../../store/slices/authSlice';

const DroupDown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleLogout = () => {
    dispatch(appLogout());
  };

  return (
    <div className="dropdown-container" ref={menuRef}>
      <div
        className="dropdown-trigger"
        onClick={() => setOpen(!open)}
      >
        <img src={user} alt="User" />
      </div>

      {open && (
        <div className="dropdown-menu">
          <ul>
            <li className="dropdown-item">
              <img src={user} alt="Profile" />
              <span>My Profile</span>
            </li>
            <li className="dropdown-item">
              <img src={edit} alt="Edit" />
              <span>Edit Profile</span>
            </li>
            <li className="dropdown-item">
              <img src={settings} alt="Settings" />
              <span>Settings</span>
            </li>
            <li className="dropdown-item">
              <img src={help} alt="Help" />
              <span>Help</span>
            </li>
            <li onClick={handleLogout} className="dropdown-item logout">
              <img src={logout} alt="Logout" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DroupDown;
