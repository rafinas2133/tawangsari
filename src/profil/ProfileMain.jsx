// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilTawangsari from "../assets/profil.png";
import Peta from '../assets/maps-transformed1.png';
import {fetchGalleriesData} from "../api/galleriesAPI.js";

export const ProfileMain = () => {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchGalleriesData();
                setGalleries(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='bg-white'>
            <div className="bg-card w-full text-white text-center py-4 mb-4">
                <h1 className="font-bold text-3xl mt-24 mb-4 md:text-5xl">PROFIL</h1>
            </div>
            <div className="w-full h-max pb-10 px-4 py-8 md:px-52 bg-white">
                <div className="mb-8">
                    <img
                        src={ProfilTawangsari ? ProfilTawangsari : ''}
                        alt="Kelurahan Tawangsari"
                        className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
                    <p className='text-justify'>
                        Tawangsari adalah sebuah kelurahan yang terletak di Kecamatan Garum, Kabupaten Blitar,
                        Jawa Timur, Indonesia. Kelurahan Tawangsari berfungsi sebagai ibu kota kecamatan Garum
                        dan merupakan lokasi dari kantor muspika, yang mencakup kantor kecamatan, kantor polsek, dan
                        koramil.
                        <br></br>
                        Kelurahan ini berbatasan dengan Desa Sidodadi di sebelah utara, Desa Slorok dan Kelurahan Bence
                        di sebelah timur,
                        Kelurahan Sumberdiren, Garum, dan Bence di sebelah selatan, serta Kecamatan Nglegok dan Desa
                        Pojok di sebelah barat.
                        Dikutip dari Wikipedia, Kelurahan Tawangsari memiliki luas wilayah sebesar 4,56 hektar. Dengan
                        jumlah penduduk
                        sekitar 7.884 jiwa pada tahun 2024, yang terdiri dari 3.911 laki-laki dan 3.973 perempuan.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Wilayah</h2>
                    <p className='text-justify'>
                        Desa Tawangsari di Kecamatan Garum, Kabupaten Blitar, terdiri dari empat wilayah
                        utama yang memiliki karakteristik masing-masing. Wilayah Tawangsari terletak di
                        pusat kelurahan, dengan permukiman padat penduduk dan sebagian besar wilayahnya
                        datar dengan sedikit bukit. Di sebelah timur Tawangsari, terdapat wilayah Ngebrak
                        yang memiliki lahan pertanian cukup luas dan wilayahnya lebih berbukit dibandingkan
                        dengan Tawangsari. Di sebelah barat Tawangsari, terdapat wilayah Tawangrejo yang juga
                        memiliki lahan pertanian dan kebun dengan kontur wilayah agak berbukit serta beberapa dataran.
                        Terakhir, wilayah Tawangbrak yang terletak di sebelah selatan Tawangsari memiliki
                        campuran antara lahan permukiman dan pertanian, dengan kontur wilayah yang cenderung datar
                        namun memiliki beberapa area berbukit. Setiap wilayah ini memberikan kontribusi beragam terhadap
                        potensi ekonomi dan kehidupan sosial Desa Tawangsari.
                    </p>
                    <img src={Peta ? Peta : ''} alt="Peta TawangSari" className='w-full h-max'/>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Galeri</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading gallery</p>
                    ) : (
                        <Slider {...settings}>
                            {galleries.map((image, index) => (
                                <div key={index} className="p-2">
                                    <img
                                        src={`https://tawangsari.com/api/${image["image_path"]}`}
                                        alt={image.title}
                                        className="w-full h-52 object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
};
