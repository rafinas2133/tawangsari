// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchNewsById} from '../../api/newsAPI';
import news_default from "../../assets/news_default.png";
import {Helmet} from "react-helmet-async";

export const BeritaDetail = () => {
    const {uuid} = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                setNewsItem(await fetchNewsById(uuid));
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        getNews().then();
    }, [uuid]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading news: {error}</div>;
    if (!newsItem) return <div>Berita tidak ditemukan</div>;

    return (<>
        <Helmet>
            <meta name="description" content={newsItem.news.content.slice(0, 150)} />
            <meta name="keywords" content="berita, news, latest, terbaru, tawangsari, kelurahan" />
            <meta property="og:title" content={newsItem.news.title} />
            <meta property="og:description" content={newsItem.news.content.slice(0, 150)} />
            <meta property="og:image" content={`https://tawangsari.com/api/${newsItem.news["image_path"]}`} />
            <meta property="og:url" content={`https://tawangsari.com/berita/${uuid}`} />
        </Helmet>
        <div className='bg-white'>
            <div className="bg-card w-full text-white text-center py-4 my-6">
                <h1 className="font-bold text-3xl mt-20 md:text-5xl">BERITA</h1>
            </div>
            <div className="w-full h-max pb-10 px-4 md:px-10 bg-white">
                <div className="w-full md:max-w-7xl mx-auto border-b border-black pb-12">
                    <h2 className="text-2xl font-bold mb-4">{newsItem.news.title}</h2>
                    <p className="text-sm text-green-500 mb-6">Oleh {newsItem.news["uploaded_by"]} | {new Date(newsItem.news["created_at"]).toLocaleDateString('id-ID', {
                        day: '2-digit', month: 'long', year: 'numeric'
                    })}</p>
                    <img className="w-full h-96 object-cover rounded-lg mb-6"
                         src={`https://tawangsari.com/api/${newsItem.news["image_path"]}`}
                         alt={newsItem.news.title} onError={(e) => {
                        e.target.src = news_default;
                    }}/>
                    <div className="text-lg text-justify"
                         dangerouslySetInnerHTML={{__html: newsItem.news.content}}/>
                </div>
            </div>
        </div>
        <div
            className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">
            <div className='flex justify-start pb-12'>
                <h1 className='text-3xl font-bold'>BERITA LAINNYA</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItem["recommendations"].map((item) => (<div key={item["uuid"]}
                                                                 className="group relative bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                    <Link to={`/berita/${item["uuid"]}`} className="block">
                        <div className='overflow-hidden rounded-lg'>
                            <img
                                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-700 ease-in-out transform group-hover:scale-110 "
                                src={`https://tawangsari.com/api/${item["image_path"]}`} alt={item.title}
                                onError={(e) => {
                                    e.target.src = news_default;
                                }}/>
                        </div>
                        <div
                            className="bg-card md:h-80 text-white text-left p-4 rounded-lg flex flex-col justify-between">
                            <h5 className="text-xl xl:text-lg lg:text-xl font-bold mb-2">{item.title.split(' ').slice(0, 7).join(' ')}...</h5>
                            <p className="text-sm text-yellow-400 mb-4">Oleh {item["uploaded_by"]} | {new Date(item["created_at"]).toLocaleDateString('id-ID', {
                                day: '2-digit', month: 'long', year: 'numeric'
                            })}</p>
                            <button className="bg-mist w-full text-white px-4 py-2 rounded mt-auto">Baca Lebih
                                Lanjut
                            </button>
                        </div>
                    </Link>
                </div>))}
            </div>
        </div>
    </>);
};
