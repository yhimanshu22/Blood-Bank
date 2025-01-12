import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-md mx-auto p-6  bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          if (formType === "login") {
            return handleLogin(e, email, password, role);
          } else if (formType === "register") {
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website
            );
          }
        }}
      >
        <h1 className="text-2xl font-bold text-black text-center mb-4">{formTitle}</h1>
        {/* Radio Buttons */}
        <div className="flex flex-wrap items-center space-x-4">
          {['donar', 'admin', 'hospital', 'organisation'].map((roleValue) => (
            <div key={roleValue} className="flex items-center space-x-2">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="role"
                id={`${roleValue}Radio`}
                value={roleValue}
                onChange={(e) => setRole(e.target.value)}
                checked={role === roleValue}
              />
              <label htmlFor={`${roleValue}Radio`} className="text-gray-700 dark:text-gray-300">
                {roleValue.charAt(0).toUpperCase() + roleValue.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Conditional Fields */}
        {(() => {
          switch (formType) {
            case "login":
              return (
                <>
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            case "register":
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText="Name"
                      labelFor="forName"
                      inputType="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <>
                    <InputType
                      labelText="Organisation Name"
                      labelFor="forOrganisationName"
                      inputType="text"
                      name="organisationName"
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                     <InputType
                    labelText="Website"
                    labelFor="forWebsite"
                    inputType="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                    </>
                  )}
                  {role === "hospital" && (
                    <>
                    <InputType
                      labelText="Hospital Name"
                      labelFor="forHospitalName"
                      inputType="text"
                      name="hospitalName"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />

                    <InputType
                    labelText="Website"
                    labelFor="forWebsite"
                    inputType="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    />
                  </>
                  )}
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                 
                  <InputType
                    labelText="Address"
                    labelFor="forAddress"
                    inputType="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText="Phone"
                    labelFor="forPhone"
                    inputType="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            default:
              return null;
          }
        })()}

<div className="flex md:flex-row md:justify-between items-center">
  <div className="flex items-center space-x-2 mb-4 md:mb-0">
    {formType === "login" ? (
      <div className="mt-4 ml-3">
      <p className="text-gray-700 dark:text-gray-600 text-center md:text-left">
        Not registered yet?{" "}
        <Link to="/register" className="text-blue-500 hover:underline font-medium">
          Register here!
        </Link>
      </p>
      </div>
    ) : (
      <div className="flex justify-center mt-4 ml-3">
      <p className="text-gray-400 dark:text-gray-600 text-center md:text-left">
        Already a user?{" "}
        <Link to="/login" className="text-blue-500 hover:underline ml-1 font-medium">
          Login here!
        </Link>
      </p>
      </div>
    )}
  </div>

  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
    py-2 px-6 rounded-full mt-0.5 focus:outline-none transition-colors duration-300"
  >
    {submitBtn}
  </button>
</div>

      </form>
    </div>
  );
};

export default Form;
