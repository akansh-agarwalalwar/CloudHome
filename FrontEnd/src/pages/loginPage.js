import { useState } from "react";

import useLogin from "../hooks/useLogin";
import "./loginAndSignup.css";
import logo from "../Assets/image.png";
import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleSubmit = () => {
    const validation = true;
    if (validation) {
      login({ email, password });
    } else {
      alert("Validation Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="input-caontainer">
        <div className="content">
          <div className="sigin-para">
            <p className="signin-para-text">Sign in</p>
            <p className="signin-para-text-2">
              {" "}
              Hey, Enter your details to login to your account
            </p>
          </div>
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="register-now">
            <p className="donthave">Don’t have an account yet?</p>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Register now!
            </NavLink>
          </div>

          <div className="botom-cnt">
            <button className="logn-btn" onClick={handleSubmit}>
              <p className="login-text">login</p>
            </button>
            <p className="signwith">- Or Sign in with -</p>
            <div className="social-sign">
              <div className="soical-content">
                <FaGoogle size={15} />
                <p className="social-text">Google</p>
              </div>
              <div className="soical-content">
                <FaApple size={15} />
                <p className="social-text">Apple ID</p>
              </div>
              <div className="soical-content">
                <FaFacebook size={15}/>
                <p className="social-text">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="logo" src={logo} />
    </div>
  );
};

export default LoginPage;
