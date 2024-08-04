// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUmkmsData } from "../api/umkmsAPI.js";
import umkm_default from "../assets/umkm_default.png";
import {Loading} from "../components/Loading";

export const UMKMMain = () => {
    const [umkmsItem, setUmkmsItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [currentPage, setCurrentPage] = useState(1);
    const categories = ['Semua', 'Kuliner', 'Salon & Kecantikan', 'Jasa & Reparasi', 'Lainnya'];
    const itemsPerPage = 6;

    useEffect(() => {
        const getUmkms = async () => {
            try {
                setLoading(true);
                const data = await fetchUmkmsData();
                setUmkmsItem(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        getUmkms().then();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    if (loading) return <Loading />;
    if (error) return <div>Error loading UMKMs: {error}</div>;
    if (!umkmsItem || umkmsItem.length === 0) return <div>UMKMs tidak ditemukan</div>;

    const filteredData = selectedCategory === 'Semua'
        ? umkmsItem
        : umkmsItem.filter(item => item.category === selectedCategory);

    if (filteredData.length === 0) return <div>UMKMs tidak ditemukan</div>;

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pageData.map(item => (
                    <div key={item["uuid"]} className="p-2 w-full">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
                            <img
                                src={`https://tawangsari.com/api/${item["image_path"]}`}
                                alt={item.title}
                                className="w-full h-48 sm:h-48 object-cover"
                                onError={(e) => { e.target.src = umkm_default; }}
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                                <p className="text-sm text-gray-600 mb-4">{item.description.split(' ').slice(0, 5).join(' ')}...</p>
                                <Link to={`/umkm/${item["uuid"]}`}>
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
                                        Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        </div>
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
};
