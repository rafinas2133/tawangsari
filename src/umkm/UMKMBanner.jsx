// eslint-disable-next-line no-unused-vars
import React from 'react';
import UMKM from '../assets/umkm.png';
import {Helmet} from "react-helmet-async";

export const UMKMBanner = () => {
    return (<>
        <Helmet>
            <meta name="description"
                  content="Tempat UMKM di Kelurahan Tawangsari, Kecamatan Garum, Kabupaten Blitar"/>
            <meta name="keywords" content="umkm, usaha, makanan, minuman, latest, terbaru, tawangsari, kelurahan"/>
            <meta property="og:title" content="UMKM Kelurahan Tawangsari"/>
            <meta property="og:description"
                  content="UMKM Kelurahan Tawangsari, Kecamatan Garum, Kabupaten Blitar"/>
            <meta property="og:url" content={`https://tawangsari.com/umkm`}/>
        </Helmet>
        <div className="relative bg-white w-full min-h-[50vh]  md:h-[40vw] lg:h-[50vw] mt-20 pb-20 overflow-hidden"
             style={{backgroundImage: `url(${UMKM})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div
                className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <h2 className="text-2xl md:text-5xl font-bold text-center md:mt-20">UMKM</h2>
                <p className="text-lg md:text-2xl text-center">Usaha Mikro, Kecil, dan Menengah yang
                    Beroperasi di Lingkungan Kelurahan Tawangsari</p>
            </div>
        </div>
    </>);
}
