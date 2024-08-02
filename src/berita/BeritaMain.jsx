import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useNews from '../hooks/useNews';

export const BeritaMain = () => {

    const { news, loading, error, fetchNews } = useNews();

  useEffect(() => {
    fetchNews();
  }, []);

    return (
        <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                    <div key={item.uuid} className="group relative bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                        <Link to={`/berita/${item.uuid}`} className="block">
                            <div className='overflow-hidden rounded-lg'>
                                <img className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-700 ease-in-out transform group-hover:scale-110 " src={`https://tawangsari.com/api/${item.image_path}`} alt={item.title} />
                            </div>
                            <div className="bg-card md:h-80 text-white text-left p-4 rounded-lg flex flex-col justify-between">
                                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                <p className="text-sm text-yellow-400 mb-4">Oleh {item.uploaded_by} | {new Date(item.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                <button className="bg-mist w-full text-white px-4 py-2 rounded mt-auto">Baca Lebih Lanjut</button>
                            </div>
                        </Link>  
                    </div>
                ))}
            </div>
        </div>
    );
}

