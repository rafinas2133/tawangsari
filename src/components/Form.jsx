import React from 'react';

const Form = ({ onSubmit, fields, handleChange, data, loading }) => (
  <form onSubmit={onSubmit} className="bg-white p-4 shadow-md rounded">
    {fields.map((field) => (
      <div key={field.name} className="mb-4">
        <label className="block mb-2 text-gray-700">{field.label}</label>
        <input
          name={field.name}
          value={field.type === 'file' ? undefined : data[field.name]}
          onChange={handleChange}
          type={field.type}
          multiple={field.multiple || false}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    ))}
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4" disabled={loading}>
      {loading ? 'Loading...' : 'Submit'}
    </button>
  </form>
);

export default Form;
