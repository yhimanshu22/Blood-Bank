import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // Find org records based on user role
  const getOrg = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-orgnaisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get("/inventory/get-orgnaisation-for-hospital");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrg();
  }, [user]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-4">Organisation List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
            <thead className="bg-gray-700 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Name</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Email</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Phone</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Address</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record, index) => (
                <tr
                  key={record._id}
                  className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                >
                  <td className="px-4 py-2">{record.organisationName}</td>
                  <td className="px-4 py-2">{record.email}</td>
                  <td className="px-4 py-2">{record.phone}</td>
                  <td className="px-4 py-2">{record.address}</td>
                  <td className="px-4 py-2">
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default OrganisationPage;
