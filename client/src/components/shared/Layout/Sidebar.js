import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // GET USER STATE
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="bg-gray-800 dark:bg-gray-800 p-4 w-64 ">
      <div className="space-y-2 text-white dark:text-white">
        {/* Organization Role Links */}
        {user?.role === "organisation" && (
          <>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/">Inventory</Link>
            </div>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/donar" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/donar">Donar</Link>
            </div>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/hospital" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/hospital">Hospital</Link>
            </div>
          </>
        )}

        {/* Admin Role Links */}
        {user?.role === "admin" && (
          <>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/donar-list" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/donar-list">Donar List</Link>
            </div>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/hospital-list" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/hospital-list">Hospital List</Link>
            </div>
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === "/org-list" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/org-list">Organisation List</Link>
            </div>
          </>
        )}

        {/* Donar and Hospital Role Links */}
        {(user?.role === "donar" || user?.role === "hospital") && (
          <div
            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
              location.pathname === "/orgnaisation" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/orgnaisation">Organisation</Link>
          </div>
        )}

        {/* Hospital Role Link */}
        {user?.role === "hospital" && (
          <div
            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
              location.pathname === "/consumer" ? "bg-blue-500 text-white" : "text-gray-300 dark:text-gray-300"
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/consumer">Consumer</Link>
          </div>
        )}

        {/* Donar Role Link */}
        {user?.role === "donar" && (
          <div
            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
              location.pathname === "/donation" ? "bg-blue-500 text-white " : "text-gray-300 dark:text-gray-300"
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/donation">Donation</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
