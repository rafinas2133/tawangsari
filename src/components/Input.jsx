import React from 'react';

const Input = ({ label, name, value, onChange, type = 'text', multiple = false }) => (
  <div className="mb-4">
    <label className="block mb-2 text-gray-700">{label}</label>
    <input
      name={name}
      value={type === 'file' ? undefined : value}
      onChange={onChange}
      type={type}
      multiple={multiple}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Input;
