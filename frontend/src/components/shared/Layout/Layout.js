import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Header */}
        <Header />
      {/* Main Content and Sidebar */}

      <div className="flex flex-1">
          <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 p-6 text-gray-300 dark:text-gray-200 bg-gray-800 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
