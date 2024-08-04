// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { postStructures, updateStructures, fetchStructuresData } from '../../api/structuresAPI';
import { Alert } from './Alert';

// eslint-disable-next-line react/prop-types
export const StructureForm = ({ id, existingData, onSuccess, onClose }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [nip, setNip] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [upperLevelUuid, setUpperLevelUuid] = useState("");
    const [structures, setStructures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchStructuresData();
                setStructures(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData().then();

        if (existingData) {
            // eslint-disable-next-line react/prop-types
            setName(existingData.name);
            // eslint-disable-next-line react/prop-types
            setPosition(existingData.level);
            // eslint-disable-next-line react/prop-types
            setNip(existingData.nip);
            // eslint-disable-next-line react/prop-types
            setPreviewImage(`https://tawangsari.com/api/${existingData["image_path"]}`);
            // eslint-disable-next-line react/prop-types
            setUpperLevelUuid(existingData.upper_level_uuid || "");
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
            formData.append('name', name);
            formData.append('level', position);
            formData.append('nip', nip);
            formData.append('upper_level_uuid', upperLevelUuid);
            if (image) {
                formData.append('image', image);
            }

            if (id) {
                await updateStructures(id, formData);
            } else {
                await postStructures(formData);
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
            {error && <Alert message={error} type="error" onClose={() => setError(null)} />}
            {success && <Alert message={success} type="success" onClose={() => setSuccess(null)} />}
            <div>
                <label className="block mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Position</label>
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label className="block mb-2">NIP</label>
                <input
                    type="text"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Image</label>
                {previewImage && <img src={previewImage} alt="Preview" className="mb-2 h-32" />}
                <input type="file" onChange={handleImageChange} className="p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div>
                <label className="block mb-2">Upper Level</label>
                <select
                    value={upperLevelUuid || ""}
                    onChange={(e) => setUpperLevelUuid(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                >
                    <option value="">Select Upper Level</option>
                    {structures.map((structure) => (
                        <option key={structure["uuid"]} value={structure["uuid"]}>
                            {structure.name}
                        </option>
                    ))}
                </select>
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
