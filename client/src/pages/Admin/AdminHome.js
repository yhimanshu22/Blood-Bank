import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <div className="flex flex-col mt-4 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Welcome Admin, <span className="text-green-500">{user?.name}</span>
          </h1>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Manage Blood Bank App
          </h3>
          <hr className="border-gray-300 dark:border-gray-600" />
          <p className="text-gray-600 dark:text-gray-300">
            Welcome, {user?.name}! As an administrator of the Blood Bank App, you play a crucial role in managing and maintaining our services. Your dedication ensures that blood donation processes run smoothly, contributing to saving lives every day. Feel free to navigate through the dashboard and manage various aspects of the application to ensure efficient operations. Thank you for your commitment and valuable contributions!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

