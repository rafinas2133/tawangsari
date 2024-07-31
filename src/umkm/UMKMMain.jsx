import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

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

export const UMKMMain = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['Semua', 'Kuliner', 'Salon & Kecantikan', 'Jasa & Reparasi', 'Lainnya'];
  const itemsPerPage = 6;

  const filteredData = selectedCategory === 'Semua'
    ? data
    : data.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const pageData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  };

  useEffect(() => {
    // Reset page to 1 when filter changes
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 lg:p-20">
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
      <Slider {...settings} key={selectedCategory}>
        {pageData.map(item => (
          <div key={item.id} className="p-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 h-full">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Link to={`/umkm/${item.id}`}>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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