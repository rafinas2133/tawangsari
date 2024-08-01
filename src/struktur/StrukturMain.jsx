import React, { useEffect } from 'react';
import Guest from '../assets/guest.png';
import useStructures from '../hooks/useStructures';

export const StrukturMain = () => {
  const { structures, loading, error, fetchStructures } = useStructures();

  useEffect(() => {
    fetchStructures();
  }, []); // Pass an empty array to run this effect only once

  return (
    <div className='bg-white pt-10'>
      <div className="bg-card w-full text-white text-center py-4 mb-6">
        <h1 className="font-bold text-3xl mt-20 mb-4 md:text-5xl">STRUKTUR</h1>
      </div>
      <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && <p>Loading...</p>}
          {error && <p>Error loading structures: {error.message}</p>}
          {!loading && !error && structures.map((item) => (
            <div key={item.uuid} className="bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
              <div className="block">
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className="w-full h-72 object-cover rounded-lg mb-4"
                    src={item.image_path ? `https://tawangsari.com/api/${item.image_path}` : Guest}
                    alt={item.name}
                  />
                </div>
                <div className="bg-card md:h-max text-white p-4 rounded-lg flex flex-col justify-between text-center">
                  <h5 className="text-xl font-bold mb-2">{item.level}</h5>
                  <p className="text-l text-white">{item.name}</p>
                  <p className="text-l text-yellow-400">{item.nip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
