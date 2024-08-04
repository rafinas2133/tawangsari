// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import {deleteStructures, fetchStructuresData} from '../../api/structuresAPI';
import {Modal} from '../components/Modal';
import {StructureForm} from '../components/StructureForm';
import {Alert} from '../components/Alert';
import {ConfirmationModal} from '../components/ConfirmationModal';
import {Footer} from "../components/Footer.jsx";

export const AdminStructurePage = () => {
    const [structures, setStructures] = useState([]);
    const [filteredStructures, setFilteredStructures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentStructureId, setCurrentStructureId] = useState(null);
    const [currentStructureData, setCurrentStructureData] = useState(null);
    const [alert, setAlert] = useState({message: '', type: ''});
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(() => () => {
    });
    const itemsPerPage = 10;

    useEffect(() => {
        const getStructures = async () => {
            try {
                setLoading(true);
                const data = await fetchStructuresData();
                setStructures(data);
                setFilteredStructures(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getStructures().then();
    }, []);

    useEffect(() => {
        const filtered = structures.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.nip.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStructures(filtered);
        setCurrentPage(1);
    }, [searchTerm, structures]);

    const handleEdit = (id) => {
        const structureItem = structures.find(item => item["uuid"] === id);
        setCurrentStructureId(id);
        setCurrentStructureData(structureItem);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentStructureId(null);
        setCurrentStructureData(null);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSuccess = () => {
        setModalOpen(false);
        setAlert({message: 'Operation successful', type: 'success'});
        const getStructures = async () => {
            try {
                setLoading(true);
                const data = await fetchStructuresData();
                setStructures(data);
                setFilteredStructures(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getStructures().then();
    };

    const handleDelete = (id) => {
        setConfirmAction(() => async () => {
            try {
                await deleteStructures(id);
                handleSuccess();
                setConfirmOpen(false);
            } catch (err) {
                setError(err.response.data.message);
                setConfirmOpen(false);
            }
        });
        setConfirmOpen(true);
    };

    if (loading) return <div>Loading...</div>;

    const totalPages = Math.ceil(filteredStructures.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentStructures = filteredStructures.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Navbar/>
            <div className="p-4">
                {error && <Alert message={error} type="error" onClose={() => setError(null)}/>}
                {alert.message && <Alert message={alert.message} type={alert.type}
                                         onClose={() => setAlert({message: '', type: ''})}/>}
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-2xl font-bold mb-4">Structure</h1>
                    <button onClick={handleAdd} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add
                        Structure
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                />
                <table className="w-full bg-white border border-gray-300 rounded-md">
                    <thead>
                    <tr>
                        <th className="p-2 border border-gray-300">Name</th>
                        <th className="p-2 border border-gray-300">Position</th>
                        <th className="p-2 border border-gray-300">NIP</th>
                        <th className="p-2 border border-gray-300">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentStructures.map((item) => (
                        <tr key={item["uuid"]}>
                            <td className="p-2 border border-gray-300">{item.name}</td>
                            <td className="p-2 border border-gray-300">{item.level}</td>
                            <td className="p-2 border border-gray-300">{item.nip}</td>
                            <td className="p-2 border border-gray-300">
                                <div className="flex">
                                    <button onClick={() => handleEdit(item["uuid"])}
                                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit
                                    </button>
                                    <button onClick={() => handleDelete(item["uuid"])}
                                            className="bg-red-500 text-white px-2 py-1 rounded">Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-center">
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <Modal isOpen={modalOpen} onClose={handleModalClose}>
                    <StructureForm id={currentStructureId} existingData={currentStructureData}
                                   onClose={handleModalClose} onSuccess={handleSuccess}/>
                </Modal>
                <ConfirmationModal
                    isOpen={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    onConfirm={confirmAction}
                    message="Are you sure you want to delete this item?"
                />
            </div>
            <Footer/>
        </>
    );
};
