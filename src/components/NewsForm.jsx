import React, { useState } from 'react';

const NewsForm = () => {
  const [news, setNews] = useState({
    title: '',
    content: '',
    image: '',
    timestamp: '',
    uploader: ''
  });

  const handleChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(news);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
      <h2 className="text-2xl mb-4">Add News</h2>
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input name="title" value={news.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Content</label>
        <textarea name="content" value={news.content} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image Path</label>
        <input name="image" value={news.image} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Timestamp</label>
        <input name="timestamp" type="datetime-local" value={news.timestamp} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Uploader</label>
        <input name="uploader" value={news.uploader} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default NewsForm;
