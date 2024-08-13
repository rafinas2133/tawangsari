// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { postNews, updateNews } from '../../api/newsAPI';
import { Alert } from './Alert';

// eslint-disable-next-line react/prop-types
export const NewsForm = ({ id, existingData, onSuccess, onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const categories = ['Kegiatan', 'Kependudukan', 'Perpajakan', 'Umum', 'Lainnya'];

    useEffect(() => {
        if (existingData) {
            // eslint-disable-next-line react/prop-types
            setTitle(existingData["title"]);
            // eslint-disable-next-line react/prop-types
            setCategory(existingData.category);
            // eslint-disable-next-line react/prop-types
            setContent(existingData["content"]);
            // eslint-disable-next-line react/prop-types
            setPreviewImage(`https://tawangsari.com/api/${existingData["image_path"]}`);
        }
    }, [existingData]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('category', category);
            formData.append('content', content);
            if (image) {
                formData.append('image', image);
            }

            if (id) {
                await updateNews(id, formData);
            } else {
                await postNews(formData);
            }
            setSuccess("Operation successful");
            onSuccess();
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {error && <Alert message={error} type="error" onClose={() => setError(null)} />}
            {success && <Alert message={success} type="success" onClose={() => setSuccess(null)} />}
            <div>
                <label className="block mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                >
                    <option value="Lainnya">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block mb-2">Image</label>
                {previewImage && <img src={previewImage} alt="Preview" className="mb-2 h-32" />}
                <input type="file" onChange={handleImageChange} className="p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div>
                <label className="block mb-2">Content</label>
                <ReactQuill value={content} onChange={setContent} className="h-64 mb-12" />
            </div>
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {loading ? 'Saving...' : id ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};
