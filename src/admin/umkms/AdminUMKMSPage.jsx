// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import {deleteUmkm, fetchUmkmsData} from '../../api/umkmsAPI';
import {Modal} from '../components/Modal';
import {UmkmForm} from '../components/UMKMForm';
import {Alert} from '../components/Alert';
import {ConfirmationModal} from '../components/ConfirmationModal';
import {Footer} from "../components/Footer.jsx";
import { Loading } from "../components/Loading";

export const AdminUmkmsPage = () => {
    const [umkms, setUmkms] = useState([]);
    const [filteredUmkms, setFilteredUmkms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Semua');
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentUmkmId, setCurrentUmkmId] = useState(null);
    const [currentUmkmData, setCurrentUmkmData] = useState(null);
    const [alert, setAlert] = useState({message: '', type: ''});
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(() => () => {});
    const itemsPerPage = 10;
    const categories = ['Semua', 'Kuliner', 'Salon & Kecantikan', 'Jasa & Reparasi', 'Lainnya'];

    useEffect(() => {
        const getUmkms = async () => {
            try {
                setLoading(true);
                const data = await fetchUmkmsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setUmkms(sortedData);
                setFilteredUmkms(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getUmkms().then();
    }, []);

    useEffect(() => {
        const filtered = umkms.filter(item =>
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.owner.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (categoryFilter === 'Semua' || item.category === categoryFilter)
        );
        setFilteredUmkms(filtered);
        setCurrentPage(1);
    }, [categoryFilter, searchTerm, umkms]);

    const handleEdit = (id) => {
        const umkmItem = umkms.find(item => item["uuid"] === id);
        setCurrentUmkmId(id);
        setCurrentUmkmData(umkmItem);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentUmkmId(null);
        setCurrentUmkmData(null);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSuccess = () => {
        setModalOpen(false);
        setAlert({message: 'Operation successful', type: 'success'});
        const getUmkms = async () => {
            try {
                setLoading(true);
                const data = await fetchUmkmsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setUmkms(sortedData);
                setFilteredUmkms(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getUmkms().then();
    };

    const handleDelete = (id) => {
        setConfirmAction(() => async () => {
            try {
                await deleteUmkm(id);
                handleSuccess();
                setConfirmOpen(false);
            } catch (err) {
                setError(err.response.data.message);
                setConfirmOpen(false);
            }
        });
        setConfirmOpen(true);
    };

    if (loading) return <Loading/>;

    const totalPages = Math.ceil(filteredUmkms.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUmkms = filteredUmkms.slice(startIndex, startIndex + itemsPerPage);

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
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">UMKM</h1>
                    <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add UMKM</button>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4 p-2 border border-gray-300 rounded-l-md w-full"
                    />
                    <div>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-r-md w-fit"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <table className="w-full bg-white border border-gray-300 rounded-md">
                    <thead>
                    <tr>
                        <th className="p-2 border border-gray-300">Title</th>
                        <th className="p-2 border border-gray-300">Owner</th>
                        <th className="p-2 border border-gray-300">Category</th>
                        <th className="p-2 border border-gray-300">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentUmkms.map((item) => (
                        <tr key={item["uuid"]}>
                            <td className="p-2 border border-gray-300">{item.title}</td>
                            <td className="p-2 border border-gray-300">{item.owner}</td>
                            <td className="p-2 border border-gray-300">{item.category}</td>
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
                    <UmkmForm id={currentUmkmId} existingData={currentUmkmData} onClose={handleModalClose}
                              onSuccess={handleSuccess}/>
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
