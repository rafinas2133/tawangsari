import React, { useState } from 'react';

const GalleryForm = () => {
  const [gallery, setGallery] = useState({
    images: []
  });

  const handleImageChange = (e) => {
    setGallery({
      ...gallery,
      images: [...e.target.files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(gallery);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
      <h2 className="text-2xl mb-4">Add Gallery</h2>
      <div className="mb-4">
        <label className="block mb-2">Images</label>
        <input name="images" type="file" multiple onChange={handleImageChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default GalleryForm;
