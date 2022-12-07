import React from "react";
import { useContext } from "react";
import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logoutUser, } = useContext(AuthContext);

  const menuItems = (
    <React.Fragment>
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      {/* <li>
        <Link to="/login">Login</Link>
      </li> */}

      <li></li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-slate-800 sticky top-0 z-50  flex justify-around ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            <img src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <FaTv className="text-blue-500 mx-2"></FaTv> <span>TV MAZE</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>

        {user || user?.email || user?.uid || user?.displayName ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user.displayName" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
               <Link onClick={logoutUser}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="btn btn-info">
              <Link to="/login">Log in</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
