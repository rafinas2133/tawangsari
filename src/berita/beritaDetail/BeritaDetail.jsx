import React from 'react';
import { useParams } from 'react-router-dom';

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

export const BeritaDetail = () => {
    const { id } = useParams();
    const beritaItem = beritaData.find(item => item.id === parseInt(id));

    if (!beritaItem) {
        return <div>Berita tidak ditemukan</div>;
    }

    return (
        <div className='bg-white '>
            <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-28 md:text-5xl">BERITA</h1>
            </div>
            <div className="w-full h-max pb-10 px-4 md:px-10 bg-white">
            <div className="w-screen md:max-w-7xl mx-auto border-b border-black pb-12">
                <h2 className="text-2xl font-bold mb-4">{beritaItem.title}</h2>
                <p className="text-sm text-green-500 mb-6">{beritaItem.description}</p>
                <img className="w-full h-96 object-cover rounded-lg mb-6" src={beritaItem.imageUrl} alt={beritaItem.title} />
                <p className="text-lg text-justify">
                    {/* Example content for the detailed news */}
                    Blitar, 21 Juli 2024 – Desa Tawangsari, Kecamatan Garum, Kabupaten Blitar, menggelar acara kirab budaya dan bersih desa yang meriah pada tanggal 21 Juli 2024. 
                    Acara ini diadakan sebagai ungkapan syukur kepada Tuhan atas limpahan rezeki yang telah diterima oleh desa. Kegiatan tersebut dibagi menjadi dua sesi, yang berlangsung dari pagi hingga sore hari, dan melibatkan partisipasi antusias dari seluruh warga desa dan mahasiswa MDK FILKOM UB.
                </p>
                {/* Add more content as needed */}
            </div>
        </div>
        </div>
    );
}

