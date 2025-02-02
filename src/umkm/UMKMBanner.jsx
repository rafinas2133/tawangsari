import { useState, useEffect } from 'react';

export const UMKMBanner = () => {
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

    return (
        <div className="relative bg-white w-full h-screen mt-16 sm:mt-20 overflow-hidden">
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
