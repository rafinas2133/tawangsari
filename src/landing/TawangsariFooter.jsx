// eslint-disable-next-line no-unused-vars
import React from 'react';
import LogoBlitar from '../assets/logoblitar.png';
import {NavLink} from "react-router-dom";

export const TawangsariFooter = () => {
    return (
        <footer className="bg-card text-white py-10 px-4">
            <div className="flex flex-col xl:flex-row justify-between">
                <div className="flex items-center mb-6 lg:mb-0">
                    <img src={LogoBlitar ? LogoBlitar : ''} alt="Logo Kelurahan Tawangsari"
                         className="h-24 lg:h-36 mr-4"/>
                    <h1 className="text-2xl lg:text-3xl font-bold">
                        KELURAHAN <br className="hidden md:block"/>TAWANGSARI
                    </h1>
                </div>
                <div
                    className="flex flex-col md:flex-row border-t-2 lg:border-t-0 border-gray-300 pt-6 lg:pt-0 ld:border-l-2 lg:border-gray-300 lg:pl-10 lg:h-48 lg:items-center">
                    <div className="mb-6 lg:mb-0 md:mr-20 md:text-right">
                        <h2 className="text-lg lg:text-xl font-semibold mb-2">Hubungi Kami</h2>
                        <ul>
                            <li>Alamat: Jl. Penataran No.20</li>
                            <li>Telp: (0342) 4564374</li>
                            <li>Email: Kelurahantawangsari2@gmail.com</li>
                            <li>Website: www.tawangsari.com</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="items-center text-center w-full mb-2 mt-2">
                <h1 className="text-xl font-bold">
                    Website made by MMD Team 7 FILKOM UB 2024
                </h1>
            </div>
        </footer>
    );
};
