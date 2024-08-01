import React, { useState } from 'react';
import NewsForm from './NewsForm';
import UMKMForm from './UMKMForm';
import StructureForm from './StructureForm';
import GalleryForm from './GalleryForm';
import CarouselsForm from './CarouselsForm';
import useNews from '../hooks/useNews';
import useUMKM from '../hooks/useUMKM';
import useStructures from '../hooks/useStructures';
import useGalleries from '../hooks/useGalleries';
import useCarousels from '../hooks/useCarousels';

export const AdminPages = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsHooks = useNews();
  const umkmHooks = useUMKM();
  const structuresHooks = useStructures();
  const galleriesHooks = useGalleries();
  const carouselsHooks = useCarousels();

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <button onClick={() => setActiveTab('news')} className={`px-4 py-2 ${activeTab === 'news' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>News</button>
        <button onClick={() => setActiveTab('umkm')} className={`px-4 py-2 ${activeTab === 'umkm' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>UMKM</button>
        <button onClick={() => setActiveTab('structure')} className={`px-4 py-2 ${activeTab === 'structure' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Structure</button>
        <button onClick={() => setActiveTab('gallery')} className={`px-4 py-2 ${activeTab === 'gallery' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Gallery</button>
        <button onClick={() => setActiveTab('carousels')} className={`px-4 py-2 ${activeTab === 'carousels' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Carousels</button>
      </div>
      <div>
        {activeTab === 'news' && <NewsForm {...newsHooks} />}
        {activeTab === 'umkm' && <UMKMForm {...umkmHooks} />}
        {activeTab === 'structure' && <StructureForm {...structuresHooks} />}
        {activeTab === 'gallery' && <GalleryForm {...galleriesHooks} />}
        {activeTab === 'carousels' && <CarouselsForm {...carouselsHooks} />}
      </div>
    </div>
  );
};

export default AdminPages;
