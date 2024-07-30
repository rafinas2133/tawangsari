import React from 'react';
import { Link } from 'react-router-dom';

const beritaData = [
    {
        id: 1,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 2,
        title: "Lembaga Kesos kesos kesos kesos kesos",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 3,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 4,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 5,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 6,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 7,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 8,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
    {
        id: 9,
        title: "Lurah",
        name: "Arvan X Rasyid Selamanya ",
        nip: "Oleh Admin | xx Juli 2024",
        imageUrl: "https://images.unsplash.com/photo-1721978701302-6b8167d55752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
    },
];

export const StrukturMain = () => {
    return (
        <div className='bg-white pt-10'>
            <div className="bg-white w-full text-black text-center mb-6">
                <h1 className="font-bold text-3xl mt-28 md:text-5xl">STRUKTUR</h1>
            </div>
            <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {beritaData.map((item) => (
                    <div key={item.id} className="bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                        <div className="block">
                            <div className='overflow-hidden rounded-lg'>
                                <img className="w-full h-48 object-cover rounded-lg mb-4" src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="bg-card md:h-max text-white p-4 rounded-lg flex flex-col justify-between text-center">
                                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                                <p className="text-sm text-white">{item.name}</p>
                                <p className="text-sm text-yellow-400">{item.nip}</p>
                            </div>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

