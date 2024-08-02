// components/Form.js
import React from 'react';

const Form = ({ onSubmit, children, loading }) => (
  <form onSubmit={onSubmit} className="bg-white p-4 shadow-md">
    {children}
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
      Submit
    </button>
    {loading && <p>Loading...</p>}
  </form>
);

export default Form;
