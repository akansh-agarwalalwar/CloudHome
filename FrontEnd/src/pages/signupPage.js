import { useState } from "react";
import useSignup from "../hooks/useSignup";
import "./loginAndSignup.css";
import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  const handleSubmit = () => {
    const validation = true;
    if (validation) {
      signup({name, email, password});
    } else {
      alert("Validation Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="input-caontainer input-caontainer-2">
        <div className="content">
          <div className="sigin-para">
            <p className="signin-para-text">Sign Up</p>
          </div>
          <input
            className="input-field "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />

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
            <p className="donthave">You have a account?</p>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Login now!
            </NavLink>
          </div>

          <div className="botom-cnt">
            <button className="logn-btn" onClick={handleSubmit}>
              <p className="login-text">Sign Up</p>
            </button>
            <p className="signwith">- Or Sign Up with -</p>
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
                <FaFacebook size={15} />
                <p className="social-text">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
