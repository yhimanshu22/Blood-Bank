
import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { Quote } from "./Quote"; 
import { toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (error) {
      toast.error(error); // Show toast message when there's an error
    }
  }, [error]);

  return (
    <>
    
    {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 dark:bg-gray-800">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Quote Component */}
          <div className="md:w-1/2 flex justify-center items-center bg-gray-800 dark:bg-gray-800 p-6">
            <Quote />
          </div>

          {/* Form Container */}
          <div className="md:w-1/2 flex  dark:text-white justify-center items-center p-6 bg-gray-800 dark:bg-gray-800">
            <Form
              formTitle="Login Blood Bank"
              submitBtn="Login"
              formType="login"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
