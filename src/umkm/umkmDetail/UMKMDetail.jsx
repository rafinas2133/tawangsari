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
      <div>
          <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-28 md:text-5xl">UMKM</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 px-20">
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-full md:w-2/3 items-center">
            <h2 className="text-2xl font-bold mb-4">Pentol Bakso Cak Endro</h2>
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400.png?text=Image+Placeholder"
                alt="Pentol Bakso Cak Endro"
                className="rounded-lg"
              />
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                {"<"}
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                {">"}
              </button>
            </div>
            <div className="flex items-center mt-4">
              <svg
                className="w-6 h-6 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c0 1.105-1.343 2-3 2s-3-.895-3-2c0-1.105 1.343-2 3-2s3 .895 3 2z"
                />
              </svg>
              <span className="text-gray-600">Binti Masruroh</span>
            </div>
            <div className="flex items-center mt-2">
              <svg
                className="w-6 h-6 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a2 2 0 01-2 0L6 7.783a2 2 0 011.131-.448l1.498-4.493A1 1 0 0117.72 3H21a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5z"
                />
              </svg>
              <span className="text-gray-600">085856489370</span>
            </div>
            <h3 className="text-xl font-bold mt-4">Alamat</h3>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.161600686016!2d112.7707865743299!3d-7.553637644907344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f16d2c2329%3A0x349443679a72856f!2sWarung%20Makmur%2C%20Jl.%20Abadi%2C%20Suko%2C%20Kec.%20Sukomanunggal%2C%20Kota%20Surabaya%2C%20Jawa%20Timur%2060114!5e0!3m2!1sid!2sid!4v1701285183668!5m2!1sid!2sid"
                width="100%"
                height="200"
                className="rounded-lg"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="bg-blue-900 p-4 rounded-lg shadow-lg flex flex-col w-full md:w-1/3 h-max">
            <h2 className="text-2xl font-bold text-white mb-4">
              UMKM LAINNYA
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <img
                  src="https://via.placeholder.com/600x400.png?text=Image+Placeholder"
                  alt="Sego Sambel Cu Mar"
                  className="rounded-lg h-44"
                />
                <h3 className="text-xl font-bold mt-4">Sego Sambel Cu Mar</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
                  SELENGKAPNYA
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <img
                  src="https://via.placeholder.com/600x400.png?text=Image+Placeholder"
                  alt="Sego Sambel Cu Mar"
                  className="rounded-lg h-44"
                />
                <h3 className="text-xl font-bold mt-4">Sego Sambel Cu Mar</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
                  SELENGKAPNYA
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <img
                  src="https://via.placeholder.com/600x400.png?text=Image+Placeholder"
                  alt="Sego Sambel Cu Mar"
                  className="rounded-lg h-44"
                />
                <h3 className="text-xl font-bold mt-4">Sego Sambel Cu Mar</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

