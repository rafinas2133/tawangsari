// eslint-disable-next-line no-unused-vars
import React from 'react';
import BackgroundProfile from "../assets/freepik-export-20240727103006bMEb 1.png";

export const TawangsariProfile = () => {
    return (
        <div className="w-full h-max pb-20 bg-white flex flex-col items-center justify-center text-center relative">
            <h1 className="font-bold text-3xl md:text-5xl pt-10 md:pt-20 pb-5 md:pb-10 z-10">PROFIL</h1>
            <div className="mx-4 md:mx-20 p-4 md:p-10 h-auto rounded-tl-3xl rounded-br-3xl bg-card border-4 border-mist relative z-10">
                <p className="font-bold italic text-sm md:text-2xl lg:text-3xl text-white">
                    “Tawangsari adalah sebuah Kelurahan yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan Tawangsari berfungsi sebagai ibu kota Kecamatan Garum dan merupakan lokasi dari kantor muspika, yang mencakup kantor kecamatan, kantor polsek, dan koramil”
                </p>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left bg-cover"
                style={{ backgroundImage: `url(${BackgroundProfile})`, backgroundSize: 'auto 100%' }}
            />
        </div>
    );
}
