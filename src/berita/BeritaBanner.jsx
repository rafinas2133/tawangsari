import Berita from "../assets/berita.png";
import {Helmet} from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const BeritaBanner = () => {
    return (<>
        <Helmet>
            <meta name="description"
                  content="Tempat Keseluruhan Berita Kelurahan Tawangsari, Kecamatan Garum, Kabupaten Blitar"/>
            <meta name="keywords" content="berita, news, latest, terbaru, tawangsari, kelurahan"/>
            <meta property="og:title" content="Berita Kelurahan Tawangsari"/>
            <meta property="og:description"
                  content="Tempat Keseluruhan Berita Kelurahan Tawangsari, Kecamatan Garum, Kabupaten Blitar"/>
            <meta property="og:url" content={`https://tawangsari.com/berita`}/>
        </Helmet>
        <div className="relative bg-white w-full min-h-[50vh] md:h-[40vw] lg:h-[50vw] mt-20 pb-20 overflow-hidden"
             style={{backgroundImage: `url(${Berita})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div
                className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <h2 className="text-2xl md:text-5xl font-bold text-center md:mt-20">BERITA</h2>
                <p className="text-lg md:text-2xl text-center">Informasi Terkini dan Faktual mengenai
                    Kegiatan, <br></br>Program, dan Peristiwa yang terjadi di Kelurahan Tawangsari</p>
            </div>
        </div>
    </>);
}
