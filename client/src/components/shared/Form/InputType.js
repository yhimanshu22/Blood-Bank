import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-1">
      <label 
        htmlFor={labelFor} 
        className="block text-gray-700 text-sm font-medium mb-1"
      >
        {labelText}
      </label>
      
      <input
        type={inputType}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-900 dark:bg-gray-100 dark:text-gray-800"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputType;
