import React from 'react';
import LogoBlitar from '../assets/logoblitar.png'; // Adjust the path to your logo

export const TawangsariFooter = () => {
  return (
    <footer className="bg-card text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <img src={LogoBlitar} alt="Logo Kelurahan Tawangsari" className="h-24 md:h-36 mr-4" />
          <h1 className="text-2xl md:text-3xl font-bold">
            KELURAHAN <br className="hidden md:block" />TAWANGSARI
          </h1>
        </div>
        <div className="flex flex-col md:flex-row border-t-2 md:border-t-0 border-gray-300 pt-6 md:pt-0 md:border-l-2 md:border-gray-300 md:pl-10 md:h-48 md:items-center">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Navigasi</h2>
            <ul>
              <li>Profil</li>
              <li>Struktur</li>
              <li>Berita</li>
              <li>UMKM</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Hubungi Kami</h2>
            <ul>
              <li>Alamat: Jl. Penataran No.20</li>
              <li>Telp: +62 856-0457-1020</li>
              <li>Email: Kelurahantawangsari2@gmail.com</li>
              <li>Website: www.kelurahantawangsari.com</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Sosial Media</h2>
            <ul>
              <li>Tawangsari</li>
              <li>Tawangsari</li>
              <li>Tawangsari</li>
              <li>Tawangsari</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
