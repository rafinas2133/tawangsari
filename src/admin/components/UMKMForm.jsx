// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {postUmkm, updateUmkm} from '../../api/umkmsAPI';
import {Alert} from './Alert';

// eslint-disable-next-line react/prop-types
export const UmkmForm = ({id, existingData, onSuccess, onClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [category, setCategory] = useState('');
    const [googleMapLink, setGoogleMapLink] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const categories = ['Kuliner', 'Salon & Kecantikan', 'Jasa & Reparasi', 'Lainnya'];

    useEffect(() => {
        if (existingData) {
            // eslint-disable-next-line react/prop-types
            setTitle(existingData.title);
            // eslint-disable-next-line react/prop-types
            setDescription(existingData.description);
            // eslint-disable-next-line react/prop-types
            setOwner(existingData.owner);
            // eslint-disable-next-line react/prop-types
            setContactPerson(existingData.contact_person);
            // eslint-disable-next-line react/prop-types
            setCategory(existingData.category);
            // eslint-disable-next-line react/prop-types
            setGoogleMapLink(existingData.google_map_link);
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
            formData.append('description', description);
            formData.append('owner', owner);
            formData.append('contact_person', contactPerson);
            formData.append('category', category);
            formData.append('google_map_link', googleMapLink);
            if (image) {
                formData.append('image', image);
            }

            if (id) {
                await updateUmkm(id, formData);
            } else {
                await postUmkm(formData);
            }

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
            {error && <Alert message={error} type="error" onClose={() => setError(null)}/>}
            {success && <Alert message={success} type="success" onClose={() => setSuccess(null)}/>}
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
                <label className="block mb-2">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                ></textarea>
            </div>
            <div>
                <label className="block mb-2">Owner</label>
                <input
                    type="text"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Contact Person</label>
                <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
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
                <label className="block mb-2">Google Map Link</label>
                <input
                    type="text"
                    value={googleMapLink}
                    onChange={(e) => setGoogleMapLink(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
                {googleMapLink && (
                    <iframe
                        src={googleMapLink}
                        width="100%"
                        height="200"
                        style={{border: 0, marginTop: '10px'}}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                )}
            </div>
            <div>
                <label className="block mb-2">Image</label>
                {previewImage && <img src={previewImage} alt="Preview" className="mb-2 h-32"/>}
                <input type="file" onChange={handleImageChange}
                       className="p-2 border border-gray-300 rounded-md w-full"/>
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
