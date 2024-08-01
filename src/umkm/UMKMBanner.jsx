import { useState, useEffect } from 'react';
import umkmBanner from '../assets/umkm.png';

export const UMKMBanner = () => {
    const images = [
        umkmBanner,
        umkmBanner,
        umkmBanner
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000); // Fading duration
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative bg-white w-full h-max md-full mt-20 sm:mt-20 overflow-hidden">
        <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-40'}`}>
            <img src={images[currentIndex]} alt="Carousel" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4">UMKM</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-center">
                Usaha Mikro, Kecil, dan Menengah yang <br className="hidden sm:inline" /> Beroperasi di Lingkungan Kelurahan Tawangsari
            </p>
        </div>
    </div>
    );
}
