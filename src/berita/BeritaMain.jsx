// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewsData } from "../api/newsAPI.js";
import news_default from "../assets/news_default.png";
import { Loading } from "../components/Loading";

export const BeritaMain = () => {
    const [newsItem, setNewsItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [currentPage, setCurrentPage] = useState(1);
    const categories = ['Semua', 'Kegiatan', 'Kependudukan', 'Perpajakan', 'Umum', 'Lainnya'];
    const itemsPerPage = 6;

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const data = await fetchNewsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setNewsItem(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        getNews().then();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    const filteredData = selectedCategory === 'Semua'
        ? newsItem
        : newsItem.filter(item => item.category === selectedCategory);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const pageData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-white p-4 sm:p-8 md:p-12 lg:p-20 w-full">
            <div className="flex justify-start items-center mb-4">
                <div className="relative inline-block text-left w-full sm:w-auto">
                    <select
                        className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading && <Loading />}
            {error && <div>Error loading news: {error}</div>}
            
            {!loading && !error && filteredData.length === 0 && (
                <div>Tidak ada berita</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {!loading && !error && filteredData.length > 0 && pageData.map(item => (
                    <div key={item["uuid"]} className="group relative bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                    <Link to={`/berita/${item["uuid"]}`} className="block">
                        <div className='overflow-hidden rounded-lg'>
                            <img
                                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-700 ease-in-out transform group-hover:scale-110 "
                                src={`https://tawangsari.com/api/${item["image_path"]}`} alt={item.title}
                                onError={(e) => {
                                    e.target.src = news_default;
                                }}/>
                        </div>
                        <div
                            className="bg-card md:h-60 text-white text-left p-4 rounded-lg flex flex-col justify-between">
                            <h5 className="text-xl xl:text-lg lg:text-xl font-bold mb-2">{item.title.split(' ').slice(0, 7).join(' ')}...</h5>
                            <p className="text-sm text-yellow-400 mb-4">Oleh {item["uploaded_by"]} | {new Date(item["created_at"]).toLocaleDateString('id-ID', {
                                day: '2-digit', month: 'long', year: 'numeric'
                            })}</p>
                            <button className="bg-mist w-full text-white px-4 py-2 rounded mt-auto">Baca Lebih
                                Lanjut
                            </button>
                        </div>
                    </Link>
                </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <nav aria-label="Page navigation">
                        <ul className="inline-flex space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index}>
                                    <button
                                        className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
