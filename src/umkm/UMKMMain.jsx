import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useUMKM from '../hooks/useUMKM';

export const UMKMMain = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['Semua', 'Kuliner', 'Salon & Kecantikan', 'Jasa & Reparasi', 'Lainnya'];
  const itemsPerPage = 6;

  const { umkm, loading, error, fetchUMKM } = useUMKM();

  useEffect(() => {
    fetchUMKM();
  }, [fetchUMKM]);

  const filteredData = selectedCategory === 'Semua'
    ? umkm
    : umkm.filter(item => item.category === selectedCategory);

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
          slidesToShow: 1.5,
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
          <div key={item.uuid} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
              <img
                src={`https://tawangsari.com/api/${item.image_path}`}
                alt={item.title}
                className="w-full h-48 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{item.description.split(' ').slice(0, 5).join(' ')}...</p>
                <Link to={`/umkm/${item.uuid}`}>
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
