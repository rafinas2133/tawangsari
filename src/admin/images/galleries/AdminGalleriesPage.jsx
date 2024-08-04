// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { fetchGalleriesData, deleteGalleries } from '../../../api/galleriesAPI';
import { Modal } from '../../components/Modal';
import { GalleryForm } from '../../components/GalleryForm';
import { Alert } from '../../components/Alert';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { Footer } from '../../components/Footer.jsx';

export const AdminGalleriesPage = () => {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(() => () => {});
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const getCarousels = async () => {
            try {
                setLoading(true);
                const data = await fetchGalleriesData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setGalleries(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getCarousels().then();
    }, []);

    const handleAdd = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSuccess = () => {
        setModalOpen(false);
        setAlert({ message: 'Operation successful', type: 'success' });
        const getGalleries = async () => {
            try {
                setLoading(true);
                const data = await fetchGalleriesData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setGalleries(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getGalleries().then();
    };

    const handleDelete = (id) => {
        setConfirmAction(() => async () => {
            try {
                await deleteGalleries(id);
                handleSuccess();
                setConfirmOpen(false);
            } catch (err) {
                setError(err.response.data.message);
                setConfirmOpen(false);
            }
        });
        setConfirmOpen(true);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setImageModalOpen(true);
    };

    const handleImageModalClose = () => {
        setImageModalOpen(false);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleries.length) % galleries.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleries.length);
    };

    if (loading) return <div>Loading...</div>;

    const totalPages = Math.ceil(galleries.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentGalleries = galleries.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Navbar />
            <div className="p-4">
                {error && <Alert message={error} type="error" onClose={() => setError(null)} />}
                {alert.message && <Alert message={alert.message} type={alert.type} onClose={() => setAlert({ message: '', type: '' })} />}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Galleries</h1>
                    <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Image</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentGalleries.map((item, index) => (
                        <div key={item["uuid"]} className="relative group">
                            <img
                                src={`https://tawangsari.com/api/${item["image_path"]}`}
                                alt="Gallery"
                                className="w-full h-40 rounded-lg cursor-pointer"
                                onClick={() => handleImageClick(startIndex + index)}
                            />
                            <button
                                onClick={() => handleDelete(item["uuid"])}
                                className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded opacity-0 group-hover:opacity-100"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
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
                    <GalleryForm onClose={handleModalClose} onSuccess={handleSuccess} />
                </Modal>
                <ConfirmationModal
                    isOpen={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    onConfirm={confirmAction}
                    message="Are you sure you want to delete this item?"
                />
                <Modal isOpen={imageModalOpen} onClose={handleImageModalClose}>
                    <div className="flex flex-col items-center">
                        <img
                            src={`https://tawangsari.com/api/${galleries[currentImageIndex]?.['image_path']}`}
                            alt="Gallery"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <div className="flex justify-between w-full">
                            <button onClick={handlePrevImage} className="bg-blue-500 text-white px-4 py-2 rounded">{'<'}</button>
                            <div>
                                <button
                                    onClick={() => handleDelete(galleries[currentImageIndex]?.['uuid'])}
                                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Delete
                                </button>
                            </div>
                            <button onClick={handleNextImage} className="bg-blue-500 text-white px-4 py-2 rounded">{'>'}</button>
                        </div>
                    </div>
                </Modal>
            </div>
            <Footer />
        </>
    );
};
