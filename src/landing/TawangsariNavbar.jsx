import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import LogoBlitar from "../assets/logoblitar.png";

export const TawangsariNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getNavLinkClass = ({isActive}) =>
        isActive ? "block py-2 px-4 underline underline-offset-[15px] decoration-mist" : "block py-2 px-4 hover:underline hover:underline-offset-[15px] hover:decoration-mist";

    return (
        <nav
            className="absolute w-screen z-50 flex bg-white h-[80px] items-center justify-between px-4 md:px-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
                <img src={LogoBlitar ? LogoBlitar : ''} alt="Kelurahan Tawangsari" className="h-[30px] lg:h-[50px]"/>
                <h1 className="text-l lg:text-2xl whitespace-nowrap">Kelurahan Tawangsari</h1>
            </div>
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-3xl">
                    &#9776; {/* Hamburger icon */}
                </button>
            </div>
            <ul className={`lg:flex space-x-4 items-center text-2xl absolute lg:static bg-white w-content right-0 top-[80px] lg:top-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} lg:block lg:ml-auto lg:w-auto`}>
                <li className="border-t lg:border-none pl-4 pr-4">
                    <NavLink to="/" className={getNavLinkClass}>Beranda</NavLink>
                </li>
                <li className="border-t lg:border-none">
                    <NavLink to="/profil" className={getNavLinkClass}>Profil</NavLink>
                </li>
                <li className="border-t lg:border-none">
                    <NavLink to="/struktur" className={getNavLinkClass}>Struktur</NavLink>
                </li>
                <li className="border-t lg:border-none">
                    <NavLink to="/berita" className={getNavLinkClass}>Berita</NavLink>
                </li>
                <li className="border-t lg:border-none">
                    <NavLink to="/umkm" className={getNavLinkClass}>UMKM</NavLink>
                </li>
            </ul>
        </nav>
    )
}
