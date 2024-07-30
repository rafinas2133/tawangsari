import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
    {
      id: 1,
      title: "Pentol Bakso Cak Endro",
      category: "Kuliner",
      description: "Pedagang Bakso",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Sego Sambel Cu Mar",
      category: "Kuliner",
      description: "Warung Makan",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Pentol Bakso Cak Endro",
      category: "Kuliner",
      description: "Pedagang Bakso",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Sego Sambel Cu Mar",
      category: "Kuliner",
      description: "Warung Makan",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Sego Sambel Cu Mar",
      category: "Kuliner",
      description: "Warung Makan",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Sego Sambel Cu Mar",
      category: "Kuliner",
      description: "Warung Makan",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      title: "Warung Lalapan Prasmanan",
      category: "Kuliner",
      description: "Catering",
      imageUrl: "https://images.unsplash.com/photo-1721757178328-b0b7f9db730e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // ... more data
  ];

export const UMKMDetail = () => {
    const { id } = useParams();
    const dataItem = data.find(item => item.id === parseInt(id));

    if (!dataItem) {
        return <div>Data tidak ditemukan</div>;
    }

    return (
        <div className='bg-white '>
            <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-28 md:text-5xl">UMKM</h1>
            </div>
            <div className="w-full h-max pb-10 px-4 md:px-10 bg-white">
            <div className="w-screen md:max-w-7xl mx-auto border-b border-black pb-12">
                <h2 className="text-2xl font-bold mb-4">{dataItem.title}</h2>
                <p className="text-sm text-green-500 mb-6">{dataItem.description}</p>
                <img className="w-full h-96 object-cover rounded-lg mb-6" src={dataItem.imageUrl} alt={dataItem.title} />
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

