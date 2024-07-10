import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Welcome, {user?.name}! As an administrator of the Blood Bank App, you play a crucial role in managing and maintaining our services. Your dedication ensures that blood donation processes run smoothly, contributing to saving lives every day. Feel free to navigate through the dashboard and manage various aspects of the application to ensure efficient operations. Thank you for your commitment and valuable contributions!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

