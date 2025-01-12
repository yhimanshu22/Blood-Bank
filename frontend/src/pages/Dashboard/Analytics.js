import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  // Fetch blood group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.error("Error fetching blood group data:", error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  // Fetch recent blood inventory
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.error("Error fetching blood inventory:", error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center bg-gray-800 dark:bg-gray-900 gap-4 p-4">
      {data?.map((record, i) => (
        <div
          className="bg-opacity-80 p-4 rounded-lg shadow-lg"
          key={i}
          style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
        >
          <div className="text-center mb-4">
            <h1 className="text-xl font-semibold text-white mb-2">
              {record.bloodGroup}
            </h1>
            <p className="text-white">
              Total In: <b>{record.totalIn}</b> (ML)
            </p>
            <p className="text-white">
              Total Out: <b>{record.totalOut}</b> (ML)
            </p>
          </div>
          <div className="text-center text-white bg-gray-800 p-2 rounded-b-lg">
            Total Available: <b>{record.availabeBlood}</b> (ML)
          </div>
        </div>
      ))}
    </div>

      <div className="container bg-gray-800 dark:bg-gray-900">
        <h1 className="text-2xl text-white dark:text-white font-bold mb-4">Recent Blood Transactions</h1>
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-gray-800  text-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-700 text-center">
              <tr>
                <th className="px-4 py-2 border-b">Blood Group</th>
                <th className="px-4 py-2 border-b">Inventory Type</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Donar Email</th>
                <th className="px-4 py-2 border-b">Time & Date</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData?.map((record) => (
                <tr key={record._id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{record.bloodGroup}</td>
                  <td className="px-4 py-2">{record.inventoryType}</td>
                  <td className="px-4 py-2">{record.quantity} (ML)</td>
                  <td className="px-4 py-2">{record.email}</td>
                  <td className="px-4 py-2">
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Analytics;
