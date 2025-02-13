import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/landing-page");
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BiDonateBlood className="text-red-600 text-3xl" />
          <span style={{ fontFamily: 'Anton' }} className="text-4xl font-semibold text-white dark:text-white">
            Blood Bank App
          </span>
        </div>

        <ul className="flex space-x-4 items-center">
          <li className="flex items-center space-x-2">
            <BiUserCircle className="text-white dark:text-white" />
            <p className="text-gray-100 dark:text-gray-100">
              Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-2 rounded-full text-xs font-semibold">
                {user?.role}
              </span>
            </p>
          </li>
          {(location.pathname === "/" ||
            location.pathname === "/admin" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital") && (
              <li>
                <Link
                  to="/analytics"
                  className="text-blue-500 "
                >
                  Analytics
                </Link>
              </li>
            )}
          {!(location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital") && (
              <li>
                <Link
                  to="/"
                  className="text-blue-500"
                >
                  Home
                </Link>
              </li>
            )}
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-full focus:outline-none"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
