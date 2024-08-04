// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { postCarousels } from '../../api/carouselsAPI';
import { Alert } from './Alert';

// eslint-disable-next-line react/prop-types
export const CarouselForm = ({ onSuccess, onClose }) => {
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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
            formData.append('image', image);

            await postCarousels(formData);

            setSuccess('Operation successful');
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {error && <Alert message={error} type="error" onClose={() => setError(null)} />}
            {success && <Alert message={success} type="success" onClose={() => setSuccess(null)} />}
            <div>
                <label className="block mb-2">Image</label>
                {previewImage && <img src={previewImage} alt="Preview" className="mb-2 h-32" />}
                <input type="file" onChange={handleImageChange} className="p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {loading ? 'Saving...' : 'Create'}
                </button>
            </div>
        </form>
    );
};
