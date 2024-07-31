import React, { useState } from 'react';

const UMKMForm = () => {
  const [umkm, setUmkm] = useState({
    title: '',
    subtitle: '',
    owner: '',
    contactPerson: '',
    address: '',
    images: []
  });

  const handleChange = (e) => {
    setUmkm({
      ...umkm,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setUmkm({
      ...umkm,
      images: [...e.target.files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(umkm);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
      <h2 className="text-2xl mb-4">Add UMKM</h2>
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input name="title" value={umkm.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Subtitle</label>
        <input name="subtitle" value={umkm.subtitle} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Owner</label>
        <input name="owner" value={umkm.owner} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contact Person</label>
        <input name="contactPerson" value={umkm.contactPerson} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address (Google Maps Link)</label>
        <input name="address" value={umkm.address} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Images</label>
        <input name="images" type="file" multiple onChange={handleImageChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default UMKMForm;
