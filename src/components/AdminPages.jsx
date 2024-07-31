import React, { useState } from 'react';
import NewsForm from './NewsForm';
import UMKMForm from './UMKMForm';
import StructureForm from './StructureForm';
import GalleryForm from './GalleryForm';

export const AdminPages = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <button onClick={() => setActiveTab('news')} className={`px-4 py-2 ${activeTab === 'news' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>News</button>
        <button onClick={() => setActiveTab('umkm')} className={`px-4 py-2 ${activeTab === 'umkm' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>UMKM</button>
        <button onClick={() => setActiveTab('structure')} className={`px-4 py-2 ${activeTab === 'structure' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Structure</button>
        <button onClick={() => setActiveTab('gallery')} className={`px-4 py-2 ${activeTab === 'gallery' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Gallery</button>
      </div>
      <div>
        {activeTab === 'news' && <NewsForm />}
        {activeTab === 'umkm' && <UMKMForm />}
        {activeTab === 'structure' && <StructureForm />}
        {activeTab === 'gallery' && <GalleryForm />}
      </div>
    </div>
  );
};

