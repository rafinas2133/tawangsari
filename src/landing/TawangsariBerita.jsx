// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {fetchNewsData} from "../api/newsAPI";
import news_default from "../assets/news_default.png"; // Jika tidak ada gambar default, Anda bisa menghapus ini

export const TawangsariBerita = () => {
    const [beritaData, setBeritaData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNewsData();
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setBeritaData(sortedData.slice(0, 3));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading news: {error.message}</div>;
    }

    return (
        <div
            className="w-full h-max pb-10 px-4 md:px-20 bg-white flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-3xl md:text-5xl pb-5 md:pb-10">BERITA</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {beritaData.map((item) => (
                    <div key={item["uuid"]} className="flex flex-col items-center">
                        <Link to={`/berita/${item["uuid"]}`}>
                            <div
                                className="group relative w-96 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer">
                                <img
                                    className="w-full h-48 md:h-64 lg:h-80 object-cover overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                    src={`https://tawangsari.com/api/${item["image_path"]}`} alt={item.title}
                                    onError={(e) => {
                                        e.target.src = news_default;
                                    }}/>
                                <div
                                    className="absolute inset-0 h-full w-full transition-transform duration-300 ease-in-out transform translate-y-40 group-hover:translate-y-0 bg-black opacity-50"></div>
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-end transition-transform duration-300 ease-in-out transform group-hover:-translate-y-10 text-white p-4">
                                    <h5 className="text-xl md:text-2xl font-bold mb-2">{item.title.split(' ').slice(0, 7).join(' ')}...</h5>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-4">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                        <p className='pt-4 font-extralight text-xs md:text-sm lg:text-base'>Oleh <strong>{item.uploaded_by}</strong> | {new Date(item.created_at).toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-end w-full p-4 md:p-10">
                <Link to='/berita'>
                    <button className="bg-card text-white flex items-center px-4 py-2 rounded-3xl">
                        <h1 className="mr-4 md:mr-52 font-bold text-sm md:text-xl">Selengkapnya</h1>
                        <span>&#10095;</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
