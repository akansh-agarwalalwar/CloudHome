import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGenerateNewOtp from "../hooks/useGenerateNewOtp";
import useVerifyOtp from "../hooks/useVerifyOtp";
import { appLogout } from "../store/slices/authSlice";

const OtpPage = () => {
  const { email } = useSelector((e) => e.auth);
  const [otp, setOtp] = useState();
  const { generateNewOtp } = useGenerateNewOtp();
  const { verifyOtp } = useVerifyOtp();

  const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(appLogout());
    };

  const handleSubmit = () => {
    if (otp.length < 4) {
      alert("Invalid OTP");
    } else {
      const num = parseInt(otp);
      if (num >= 1000 && num <= 9999) {
        verifyOtp(num);
      } else {
        alert("Invalid OTP. OTP must be Number");
      }
    }
  };

  useEffect(() => {
    generateNewOtp();
  }, []);

  return (
    <div className="otp-caontainer">
      <div className="otp-page-container">
        <p>Email : {email}</p>
        <div className="otp-input-container">
          <input
            maxLength={4}
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className="otp-column c1" />
          <div className="otp-column c2" />
          <div className="otp-column c3" />
          <div className="otp-column c4" />
        </div>
        <div className=" btn-caontainer">
          <button className="verifybtn" onClick={handleSubmit}>
            <p> Verify </p>
          </button>
          <button className="verifybtn-2" onClick={handleLogout}>
            <p> LogOut </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
