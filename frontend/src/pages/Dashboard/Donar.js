import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Donar = () => {
  const [data, setData] = useState([]);

  // Fetch donor records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.error("Error fetching donor records:", error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-4">Donor List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
            <thead className="bg-gray-700 text-gray-300">
              <tr>
                <th className="px-6 py-3 border-b border-gray-600 text-left">Name</th>
                <th className="px-6 py-3 border-b border-gray-600 text-left">Email</th>
                <th className="px-6 py-3 border-b border-gray-600 text-left">Phone</th>
                <th className="px-6 py-3 border-b border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id} className="text-white even:bg-gray-700">
                  <td className="px-6 py-4 border-b border-gray-600">
                    {record.name || record.organisationName + " (ORG)"}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-600">
                    {record.email}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-600">
                    {record.phone}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-600">
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

export default Donar;
