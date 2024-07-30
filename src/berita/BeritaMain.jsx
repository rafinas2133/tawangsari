import React from 'react';
import { Link } from 'react-router-dom';

const beritaData = [
    {
        id: 1,
        title: "Mahasiswa FILKOM UB Gelar Pelatihan UMKM untuk Masyarakat Kelurahan Tawangsari",
        description: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 2,
        title: "Mahasiswa FILKOM UB Gelar Pelatihan UMKM untuk Masyarakat Kelurahan Tawangsari",
        description: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 3,
        title: "Mahasiswa FILKOM UB Gelar Pelatihan UMKM untuk Masyarakat Kelurahan Tawangsari",
        description: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 4,
        title: "Mahasiswa FILKOM UB Gelar Pelatihan UMKM untuk Masyarakat Kelurahan Tawangsari",
        description: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
];

export const BeritaMain = () => {
    return (
        <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {beritaData.map((item) => (
                    <div key={item.id} className="group relative bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                        <Link to={`/berita/${item.id}`} className="block">
                            <div className='overflow-hidden rounded-lg'>
                                <img className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-700 ease-in-out transform group-hover:scale-110 " src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="bg-card md:h-80 text-white text-left p-4 rounded-lg flex flex-col justify-between">
                                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                <p className="text-sm text-yellow-400 mb-4">{item.description}</p>
                                <button className="bg-mist w-full text-white px-4 py-2 rounded mt-auto">Baca Lebih Lanjut</button>
                            </div>
                        </Link>  
                    </div>
                ))}
            </div>
        </div>
    );
}

