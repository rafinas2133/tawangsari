import { useState, useEffect } from 'react';
import LogoBlitar from "../assets/logoblitar.png";
import Profil from "../assets/profil.png";
import useCarousels from '../hooks/useCarousels';

export const TawangsariBanner = () => {
    const images = [
      Profil,
      Profil,
      Profil
    ];

    const { carousels, loading, error, fetchCarousels } = useCarousels();

    useEffect(() => {
        fetchCarousels();
    }, []); // Pass an empty array to run this effect only once

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

    const goToPrevious = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setFade(true);
        }, 1000); // Fading duration
    };

    const goToNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
        }, 1000); // Fading duration
    };

    return (
        <div className="relative w-full mt-20 h-max md:h-full lg:h-full lg:pb-52 pb-20 overflow-hidden">
            <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <img src={carousels[currentIndex]} alt="Carousel" className="w-full h-full scale-[2] md:scale-100 object-cover" />
            </div>
            <div className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <img src={LogoBlitar} alt="Kelurahan Tawangsari" className="h-20 md:h-36 mb-4" />
                <h2 className="text-2xl md:text-5xl font-bold text-center">KELURAHAN TAWANGSARI</h2>
                <p className="text-lg md:text-3xl text-center">Harmoni masyarakat dan budaya dalam satu Kesatuan</p>
            </div>
            <button 
                onClick={goToPrevious} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &#10094; {/* Left arrow */}
            </button>
            <button 
                onClick={goToNext} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
}
