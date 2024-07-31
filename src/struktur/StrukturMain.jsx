import React from 'react';
import { Link } from 'react-router-dom';
import Guest from "../assets/guest.png";

const beritaData = [
    {
        id: 1,
        title: "Lurah",
        name: "Hari Agus Budi Hartono, S.Pi",
        nip: "NIP. 19730820 200604 1 014",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 2,
        title: "KASI PEMERINTAHAN DAN TRANTIB",
        name: "Harapan Sitompul, SP",
        nip: "NIP. 19760124 200604 1 011",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 3,
        title: "KASI PEMBERDAYAAN MASYARAKAT & KESOS",
        name: "Agnes Hari Indriyani P.",
        nip: "NIP. 19660503 198903 2 006",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 4,
        title: "KASI PELAYANAN PUBLIK",
        name: "Yetty Oktavia Koesoema Dewi, SE,MM",
        nip: "NIP. 19761007 201001 2 001",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 5,
        title: "SEKRETARIS LURAH",
        name: "Dwi Wijayanti, SH",
        nip: "NIP. 19760124 200604 1 011",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 6,
        title: "STAF KEADMINISTRASIAN",
        name: "Catharina Sihnugrahaningtyas",
        nip: "",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 7,
        title: "STAF KEADMINISTRASIAN",
        name: "Rusdia Trissuma",
        nip: "",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 8,
        title: "STAF KEBERSIHAN",
        name: "Agung Satria",
        nip: "",
        imageUrl: Guest,
        link: "#",
    },
    {
        id: 9,
        title: "STAF KEAMANAN",
        name: "Sismadi",
        nip: "",
        imageUrl: Guest,
        link: "#",
    },
];

export const StrukturMain = () => {
    return (
        <div className='bg-white pt-10'>
            <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-20 mb-4 md:text-5xl">STRUKTUR</h1>
            </div>
            <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {beritaData.map((item) => (
                    <div key={item.id} className="bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                        <div className="block">
                            <div className='overflow-hidden rounded-lg'>
                                <img className="w-full h-58 object-cover rounded-lg mb-4" src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="bg-card md:h-max text-white p-4 rounded-lg flex flex-col justify-between text-center">
                                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                <p className="text-l text-white">{item.name}</p>
                                <p className="text-l text-yellow-400">{item.nip}</p>
                            </div>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

