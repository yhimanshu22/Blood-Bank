import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/shared/Layout/Layout";
import API from "../services/API";
import { useSelector } from "react-redux";

const Donation = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // Fetch donor records
  const getDonars = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-4">Donation Records</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Blood Group</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Inventory Type</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Quantity</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Email</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id} className="even:bg-gray-700">
                  <td className="px-4 py-2 border-b border-gray-600">{record.bloodGroup}</td>
                  <td className="px-4 py-2 border-b border-gray-600">{record.inventoryType}</td>
                  <td className="px-4 py-2 border-b border-gray-600">{record.quantity}</td>
                  <td className="px-4 py-2  border-b border-gray-600">{record.email}</td>
                  <td className="px-4 py-2  border-b border-gray-600">
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

export default Donation;
