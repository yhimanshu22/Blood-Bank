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
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-2 flex dark:bg-gray-900 justify-between items-center">
        <div className="flex dark:bg-gray-900 items-center space-x-2">
          <BiDonateBlood className="text-red-600 text-3xl" />
          <span style={{ fontFamily: 'Anton' }} className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Blood Bank App
          </span>
        </div>
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center space-x-2">
            <BiUserCircle className="text-gray-700 dark:text-gray-300" />
            <p className="text-gray-900 dark:text-gray-100">
              Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-2 rounded-full text-xs font-semibold">
                {user?.role}
              </span>
            </p>
          </li>
          {(location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital") && (
            <li>
              <Link
                to="/analytics"
                className="text-blue-500 hover:underline"
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
                className="text-blue-500 hover:underline"
              >
                Home
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg focus:outline-none"
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
