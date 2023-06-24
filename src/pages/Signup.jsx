import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signup from "../animation/signup.json";
import "./Signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
export const Signup = () => {
  const { signupHandler } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");

  const passwordMatcher = (e) => {
    if (e.target.elements.confirm_password.value !== checkPassword) {
      alert("password not matching");
      return;
    }
    signupHandler(e);
  };
  return (
    <>
      <div className="signup-container">
        <Lottie
          className="signup-animation"
          animationData={signup}
          loop={true}
        />
        <form className="signup-form" onSubmit={(e) => passwordMatcher(e)}>
          <img
            className="login-image"
            src={require("../images/logo.png")}
            alt="hangout logo"
          />
          <h1 className="signup-form-heading">Sign up</h1>
          <input
            className="signup-form-input"
            type="text"
            id="firstname"
            required
            placeholder="First Name"
          />
          <input
            className="signup-form-input"
            type="text"
            id="lastname"
            required
            placeholder="Last Name"
          />
          <input
            className="signup-form-input"
            type="text"
            id="username"
            required
            placeholder="Username"
          />
          <input
            className="signup-form-input"
            type={showPassword ? "text" : "password"}
            id="password"
            required
            onChange={(e) => setCheckPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            className="signup-form-input"
            type={showPassword ? "text" : "password"}
            required
            id="confirm_password"
            placeholder="Confirm Password"
          />
          <label
            className="signup-show-password"
            htmlFor="signup_show_password"
          >
            <input
              id="signup_show_password"
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
          <button className="signup-btn" type="submit">
            Create Account
          </button>
          <Link className="login-signup-link" to="/login">
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
};
