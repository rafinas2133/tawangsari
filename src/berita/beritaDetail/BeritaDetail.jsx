import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useNews from '../../hooks/useNews';

export const BeritaDetail = () => {
  const { news, loading, error, fetchNews } = useNews();
  const { uuid } = useParams();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading news</div>;

  const beritaItem = news.find(item => item.uuid === uuid);

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
          <p className="text-sm text-green-500 mb-6">Oleh {beritaItem.uploaded_by} | {new Date(beritaItem.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          <img className="w-full h-96 object-cover rounded-lg mb-6" src={`https://tawangsari.com/api/${beritaItem.image_path}`} alt={beritaItem.title} />
          <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: beritaItem.content }} />
        </div>
      </div>
    </div>
  );
};
