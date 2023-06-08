import "./Login.css";
import Lottie from "lottie-react";
import login from "./animation/login.json";
export const Login = () => {
  return (
    <div>
      <img src={require("./images/logo.png")} alt="logo" />
      <Lottie animationData={login} loop={true} />;
    </div>
  );
};
