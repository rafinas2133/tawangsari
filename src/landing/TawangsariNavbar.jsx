import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoBlitar from "../assets/logoblitar.png";

export const TawangsariNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getNavLinkClass = ({ isActive }) => 
        isActive ? "block py-2 px-4 underline underline-offset-[15px] decoration-mist" : "block py-2 px-4 hover:underline hover:underline-offset-[15px] hover:decoration-mist";

    return (
        <nav className="absolute w-screen z-50 flex bg-white h-[100px] items-center justify-between px-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
                <img src={LogoBlitar} alt="Kelurahan Tawangsari" className="h-[65px]" />
                <h1 className="text-sm md:text-2xl whitespace-nowrap">Kelurahan Tawangsari</h1>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-3xl">
                    &#9776; {/* Hamburger icon */}
                </button>
            </div>
            <ul className={`md:flex space-x-4 items-center text-2xl absolute md:static bg-white w-full left-0 top-[100px] md:top-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block md:ml-auto md:w-auto`}>
                <li className="border-t pl-8 md:border-none">
                    <NavLink to="/" className={getNavLinkClass}>Beranda</NavLink>
                </li>
                <li className="border-t md:border-none">
                    <NavLink to="/profil" className={getNavLinkClass}>Profil</NavLink>
                </li>
                <li className="border-t md:border-none">
                    <NavLink to="/struktur" className={getNavLinkClass}>Struktur</NavLink>
                </li>
                <li className="border-t md:border-none">
                    <NavLink to="/berita" className={getNavLinkClass}>Berita</NavLink>
                </li>
                <li className="border-t md:border-none">
                    <NavLink to="/umkm" className={getNavLinkClass}>UMKM</NavLink>
                </li>
            </ul>
        </nav>
    )
}
