// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import {deleteNews, fetchNewsData} from '../../api/newsAPI';
import {Modal} from '../components/Modal';
import {NewsForm} from '../components/NewsForm';
import {Alert} from '../components/Alert';
import {ConfirmationModal} from "../components/ConfirmationModal.jsx";
import {Footer} from "../components/Footer.jsx";

export const AdminNewsPage = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentNewsId, setCurrentNewsId] = useState(null);
    const [currentNewsData, setCurrentNewsData] = useState(null);
    const [alert, setAlert] = useState({message: '', type: ''});
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(() => () => {
    });
    const itemsPerPage = 10;

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const data = await fetchNewsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setNews(sortedData);
                setFilteredNews(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getNews().then();
    }, []);

    useEffect(() => {
        const filtered = news.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredNews(filtered);
        setCurrentPage(1);
    }, [searchTerm, news]);

    const handleEdit = (id) => {
        const newsItem = news.find(item => item["uuid"] === id);
        setCurrentNewsId(id);
        setCurrentNewsData(newsItem);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentNewsId(null);
        setCurrentNewsData(null);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSuccess = () => {
        setModalOpen(false);
        setAlert({message: 'Operation successful', type: 'success'});
        const getNews = async () => {
            try {
                setLoading(true);
                const data = await fetchNewsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setNews(sortedData);
                setFilteredNews(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getNews().then();
    };

    const handleDelete = (id) => {
        setConfirmAction(() => async () => {
            try {
                await deleteNews(id);
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

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (<>
        <Navbar/>
        <div className="p-4">
            {error && <Alert message={error} type="error" onClose={() => setError(null)}/>}
            {alert.message && <Alert message={alert.message} type={alert.type}
                                     onClose={() => setAlert({message: '', type: ''})}/>}
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">News</h1>
                <button onClick={handleAdd} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add News
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
                    <th className="p-2 border border-gray-300">Title</th>
                    <th className="p-2 border border-gray-300">Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentNews.map((item) => (<tr key={item["uuid"]}>
                    <td className="p-2 border border-gray-300">{item.title}</td>
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
                </tr>))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-center">
                {Array.from({length: totalPages}, (_, index) => (<button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {index + 1}
                </button>))}
            </div>
            <Modal isOpen={modalOpen} onClose={handleModalClose}>
                <NewsForm id={currentNewsId} existingData={currentNewsData} onClose={handleModalClose}
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
    </>);
};
