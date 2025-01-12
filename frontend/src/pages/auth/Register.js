import React from "react";
import Form from "../../components/shared/Form/Form";
import Spinner from "../../components/shared/Spinner";
import { Quote } from "./Quote"; // Ensure this path is correct for your Quote component
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (error) {
      toast.error(error); // Show toast message when there's an error
    }
  }, [error]);

  return (
    <>
     

      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col dark:bg-gray-800 md:flex-row min-h-screen">
          {/* Quote Section */}
          <div className="md:w-1/2 flex justify-center items-center p-6 bg-gray-800 dark:bg-gray-800">
            <Quote />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 flex dark:text-white justify-center items-center p-6 bg-gray-800 dark:bg-gray-800">
            <Form
              formTitle="Join Blood Bank"
              submitBtn="Register"
              formType="register"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
