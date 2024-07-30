import { useState, useEffect } from 'react';
import LogoBlitar from "../assets/logoblitar.png";

export const TawangsariBanner = () => {
    const images = [
      "https://images.unsplash.com/photo-1722082839833-04f0094ea4ec?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1721564130772-c9ee561ab87b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1721778775422-8cf9894040a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <div className="relative w-full h-screen lg:h-full lg:pb-52 pb-20 overflow-hidden">
            <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-40'}`}>
                <img src={images[currentIndex]} alt="Carousel" className="w-full h-full object-cover" />
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
