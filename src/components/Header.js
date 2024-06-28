import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-100 shadow-lg m-4">
      <div className="logo-container">
        <img className="w-24" src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4  m-4">
          <li className="px-6">Online Status :{onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6">
            <img className="w-10" src={cart}></img>
          </li>
          <button
            className="login-logout"
            onClick={() => {
              btnLogin === "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
