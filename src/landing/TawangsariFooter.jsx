import React from 'react';
import LogoBlitar from '../assets/logoblitar.png'; // Adjust the path to your logo

export const TawangsariFooter = () => {
  return (
    <footer className="bg-card text-white py-10 px-20">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={LogoBlitar} alt="Logo Kelurahan Tawangsari" className="h-36 mr-4" />
          <h1 className="text-3xl font-bold">KELURAHAN <br/>TAWANGSARI</h1>
        </div>
        <div className="flex-grow border-l-2 border-gray-300 ml-10 pl-10 h-48 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">Navigasi</h2>
            <ul>
              <li>Profil</li>
              <li>Struktur</li>
              <li>Berita</li>
              <li>UMKM</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Hubungi Kami</h2>
            <ul>
              <li>Alamat: Jl. Penataran No.20</li>
              <li>Telp: +62 856-0457-1020</li>
              <li>Email: Kelurahantawangsari2@gmail.com</li>
              <li>Website: www.kelurahantawangsari.com</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Sosial Media</h2>
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

