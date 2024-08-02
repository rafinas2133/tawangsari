// components/Input.js
import React from 'react';

const Input = ({ label, name, value, onChange, type = 'text', multiple = false }) => (
  <div className="mb-4">
    <label className="block mb-2">{label}</label>
    <input
      name={name}
      value={type === 'file' ? undefined : value}
      onChange={onChange}
      type={type}
      multiple={multiple}
      className="w-full px-3 py-2 border rounded"
    />
  </div>
);

export default Input;
