// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/admin');
    };

    useEffect(() => {
        if (!token || !name) {
            navigate('/admin');
        }
    }, [token, name, navigate]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 z-30 p-4 text-white flex justify-between items-center relative">
            <div className="flex items-center">
                <button
                    className="block lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className={`lg:flex space-x-4 items-center text-xl absolute lg:static bg-gray-800 w-content left-0 top-[72px] lg:top-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:ml-auto lg:w-auto`}>
                    <NavLink to="/admin/news"
                             className={({isActive}) => isActive ? 'underline block p-4 lg:p-0 ml-4' : 'block p-4 ml-4 lg:p-0'}>News</NavLink>
                    <NavLink to="/admin/umkms"
                             className={({isActive}) => isActive ? 'underline block p-4 lg:p-0' : 'block p-4 lg:p-0'}>UMKMs</NavLink>
                    <NavLink to="/admin/structures"
                             className={({isActive}) => isActive ? 'underline block p-4 lg:p-0' : 'block p-4 lg:p-0'}>Structures</NavLink>
                    <NavLink to="/admin/carousels"
                             className={({isActive}) => isActive ? 'underline block p-4 lg:p-0' : 'block p-4 lg:p-0'}>Carousels</NavLink>
                    <NavLink to="/admin/galleries"
                             className={({isActive}) => isActive ? 'underline block p-4 lg:p-0' : 'block p-4 lg:p-0'}>Galleries</NavLink>
                </div>
            </div>
            <div className="flex items-center">
                {name ? (
                    <>
                        <span className="mr-4">{name}</span>
                        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                    </>
                ) : (
                    <NavLink to="/admin">Login</NavLink>
                )}
            </div>
        </nav>
    );
};
