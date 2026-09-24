import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, NAV_ITEMS } from '../utils/constants';

const Header = () => {
  const [loginBtn, setLoginBtn] = React.useState(true);
  const handleLoginBtn = () => {
    setLoginBtn(!loginBtn);
  };
  return (
    <div className="flex bg-amber-100 justify-between">
      <div className="w-20">
        <img className=" p-2 m-1 rounded-2xl" src={LOGO_URL} alt="food-logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex">
          {NAV_ITEMS.map((item, index) => {
            return (
              <li className="px-4 mx-2 font-bold text-1xl" key={index}>
                {" "}
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
          <button
            className="px-2 mx-2 border border-black bg-gray-400 text-white"
            onClick={handleLoginBtn}
          >
            {loginBtn ? "Login" : "LogOut"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
