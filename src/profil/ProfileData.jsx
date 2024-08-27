import React from 'react';
import Peta from '../assets/maps-transformed2.png';

export const ProfileData = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-max bg-gray-100 p-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="col-span-1">
          <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left" colSpan="2">Batas-batas Kelurahan Tawangsari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Utara</td>
                <td className="border border-gray-300 px-4 py-2">Desa Sidodadi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Timur</td>
                <td className="border border-gray-300 px-4 py-2">Desa Slorok, Kelurahan Garum dan Kelurahan Bence</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Selatan</td>
                <td className="border border-gray-300 px-4 py-2">Kelurahan Garum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Barat</td>
                <td className="border border-gray-300 px-4 py-2">Kelurahan Sumberdiren, Desa Pojok dan Desa Jiwut </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1 flex justify-center">
          <img src={Peta} alt="Peta TawangSari" className="w-full md:w-[300px] md:h-[500px]" />
        </div>
        <div className="col-span-1">
          <div className="bg-white shadow-md rounded p-4">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center" colSpan="2">Tawangsari</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Negara</td>
                  <td className="border px-4 py-2">Indonesia</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Provinsi</td>
                  <td className="border px-4 py-2">Jawa Timur</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kabupaten</td>
                  <td className="border px-4 py-2">Blitar</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kecamatan</td>
                  <td className="border px-4 py-2">Garum</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kode Kemendagri</td>
                  <td className="border px-4 py-2">35.05.11.1003</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kode BPS</td>
                  <td className="border px-4 py-2">3505160006</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Luas</td>
                  <td className="border px-4 py-2">456 Ha</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Jumlah penduduk</td>
                  <td className="border px-4 py-2">8.202 jiwa (2020)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kepadatan</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
