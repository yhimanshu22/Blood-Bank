import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import { toast } from "react-toastify";

const HospitalList = () => {
  const [data, setData] = useState([]);

  // Fetch hospital records
  const getHospitals = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      if (data?.success) {
        setData(data?.hospitalData);
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  // Handle delete with confirmation
  const handleDelete = async (id) => {
    try {
      toast.info(
        <div>
          <p>Are you sure you want to delete this hospital?</p>
          <div className="flex justify-between mt-3">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded focus:outline-none"
              onClick={async () => {
                toast.dismiss(); // Dismiss the toast
                try {
                  const { data } = await API.delete(`/admin/delete-hospital/${id}`);
                  toast.success(data.message);
                  setData((prevData) => prevData.filter((hospital) => hospital._id !== id)); // Update state without reloading the page
                } catch (error) {
                  toast.error("Failed to delete hospital");
                  console.error("Error:", error);
                }
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded focus:outline-none"
              onClick={() => toast.dismiss()}
            >
              No
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: false, // Keep toast open until user interacts
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } catch (error) {
      console.error("Error showing delete confirmation:", error);
      toast.error("Failed to show delete confirmation");
    }
  };

  return (
    <Layout>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-700 dark:bg-gray-700 text-gray-300 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 dark:text-gray-100 bg-gray-800 dark:bg-gray-900">
            {data?.map((record) => (
              <tr key={record._id} className="border-b dark:border-gray-600">
                <td className="px-4 py-2">{record.hospitalName}</td>
                <td className="px-4 py-2">{record.email}</td>
                <td className="px-4 py-2">{record.phone}</td>
                <td className="px-4 py-2">{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none"
                    onClick={() => handleDelete(record._id)}
                  > Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default HospitalList;
