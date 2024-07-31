import React, { useState } from 'react';

const StructureForm = () => {
  const [structure, setStructure] = useState({
    title: '',
    name: '',
    nip: '',
    image: ''
  });

  const handleChange = (e) => {
    setStructure({
      ...structure,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(structure);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
      <h2 className="text-2xl mb-4">Add Structure</h2>
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input name="title" value={structure.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input name="name" value={structure.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">NIP</label>
        <input name="nip" value={structure.nip} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image Path</label>
        <input name="image" value={structure.image} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default StructureForm;
