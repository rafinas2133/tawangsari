import React from 'react';
import pinpoint from '../assets/pinpoint.png';

export const TawangsariPeta = () => {
    return (
        <div className="w-full h-max pb-20 px-4 md:px-20 bg-white">
            <div className="flex flex-col md:flex-row gap-8 md:gap-40">
                <div className='flex flex-col items-center md:w-1/3'>
                    <img src={pinpoint} alt="pinpoint" className='h-14 mb-4' />
                    <p className="text-center font-semibold text-xl md:text-3xl px-6 md:px-0">
                        Jl. Penataran Tawangsari Kec. Garum No.20, Tawangbrale, Tawangsari, Kec. Garum, Kabupaten Blitar, Jawa Timur 66182
                    </p>
                </div>
                <div className='flex items-center pr-6 md:pr-0 md:w-2/3 lg:w-2/3'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2025261.818548469!2d109.97007566624855!3d-7.510486661538356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ecd92dbdd06f%3A0x11fa6554a2cf9a7d!2zS2FudG9yIEtlcGFsYSBLZWx1cmFoYW4gVGF3YW5nc2FyaSDqpo_qpqTqp4DqpqDqprrqprTqpoLqpo_qprzqpqXqpq3qpo_qprzqpq3qprjqpqvqprLqpqTqp4DqpqDqpq7qpoHqprHqpqvqprY!5e0!3m2!1sid!2sid!4v1722200814003!5m2!1sid!2sid" 
                        width="100%" 
                        height="360" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
