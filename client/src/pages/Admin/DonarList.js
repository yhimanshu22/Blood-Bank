import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import { toast } from "react-toastify";

const DonarList = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    
    try {
      const { data } = await API.get("/admin/donar-list");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donarData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  //DELETE FUNCTION
  const handelDelete = async (id) => {
    try {
      // Display confirmation toast with Yes/No buttons
      toast.info(
        <div>
          <p>Are you sure you want to delete this donor?</p>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-danger"
              onClick={async () => {
                toast.dismiss(); // Dismiss the toast
                try {
                  const { data } = await API.delete(`/admin/delete-donar/${id}`);
                  toast.success(data.message); 
                  window.location.reload(); // Reload the page after successful deletion
                } catch (error) {
                  toast.error("Failed to delete donor");
                  console.error("Error:", error);
                }
              }}
            >
              Yes
            </button>
            
            <button
              className="btn btn-secondary"
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
      console.error("Error:", error);
      toast.error("Failed to show delete confirmation");
    }
  };
  
  
  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(record._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default DonarList;
