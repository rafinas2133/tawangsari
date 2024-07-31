import { useState, useEffect } from 'react';
import Berita from "../assets/berita.png";

export const BeritaBanner = () => {
    const images = [
        Berita,
        Berita,
        Berita
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
        <div className="relative w-full h-screen lg:h-[534px] lg:pb-52 pb-20 overflow-hidden">
            <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-40'}`}>
                <img src={images[currentIndex]} alt="Carousel" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <h2 className="text-2xl md:text-5xl font-bold text-center md:mt-20">BERITA</h2>
                <p className="text-lg md:text-2xl text-center">Informasi Terkini dan Faktual mengenai Kegiatan, <br></br>Program, dan Peristiwa yang terjadi di Kelurahan Tawangsari</p>
            </div>
        </div>
    );
}
