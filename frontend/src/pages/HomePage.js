import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";
import { toast } from "react-toastify";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch blood records
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.error("Error fetching blood records:", error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 py-6">
          <h4
            className="text-lg font-semibold text-green-500 cursor-pointer mb-4 flex items-center"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Add Inventory
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Blood Group</th>
                  <th className="px-4 py-2 text-left">Inventory Type</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Donar Email</th>
                  <th className="px-4 py-2 text-left">Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record, index) => (
                  <tr key={record._id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                    <td className="px-4 py-2">{record.bloodGroup}</td>
                    <td className="px-4 py-2">{record.inventoryType}</td>
                    <td className="px-4 py-2">{record.quantity} (ML)</td>
                    <td className="px-4 py-2">{record.email}</td>
                    <td className="px-4 py-2">{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Modal />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
