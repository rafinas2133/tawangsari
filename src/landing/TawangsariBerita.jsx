// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import BeritaIsi from "../assets/beritaisi.png";

const beritaData = [
    {
        id: 1,
        title: "Judul Berita 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula urna ut lacus aliquet tincidunt.",
        imageUrl: BeritaIsi,
        link: "#",
        author: "Penulis 1",
        date: "2024-07-29"
    },
    {
        id: 2,
        title: "Judul Berita 2",
        description: "Aliquam tincidunt mauris eu risus varius, non sagittis purus feugiat. Sed vitae justo vitae lacus laoreet tristique.",
        imageUrl: BeritaIsi,
        link: "#",
        author: "Penulis 2",
        date: "2024-07-29"
    },
    {
        id: 3,
        title: "Judul Berita 3",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        imageUrl: BeritaIsi,
        link: "#",
        author: "Penulis 3",
        date: "2024-07-29"
    }
];

export const TawangsariBerita = () => {
    return (
        <div className="w-full h-max pb-10 px-4 md:px-20 bg-white flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-3xl md:text-5xl pb-5 md:pb-10">BERITA</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                {beritaData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <Link to={item.link}>
                            <div className="group relative w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer">
                                <img className="w-full h-48 md:h-64 lg:h-80 object-cover overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-110" src={item.imageUrl} alt={item.title} />
                                <div className="absolute inset-0 h-full w-full transition-transform duration-300 ease-in-out transform translate-y-40 group-hover:translate-y-0 bg-black opacity-50"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-end transition-transform duration-300 ease-in-out transform group-hover:-translate-y-10 text-white p-4">
                                    <h5 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h5>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-4">{item.description}</p>
                                </div>
                            </div>
                        </Link>  
                        <p className='pt-4 font-extralight text-xs md:text-sm lg:text-base'>Oleh <strong>{item.author}</strong> | {item.date}</p>
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
