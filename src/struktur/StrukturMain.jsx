// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import Guest from '../assets/structure_default.png';
import {fetchStructuresData} from "../api/structuresAPI.js";
import {Loading} from "../components/Loading";

export const StrukturMain = () => {
    const [structures, setStructures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchStructuresData();
                setStructures(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error loading carousels</div>;
    }

    return (
        <div className='bg-white pt-10'>
            <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-12 mb-4 md:text-5xl">STRUKTUR</h1>
            </div>
            <div className="w-full h-max p-12 px-4 md:px-20 bg-white items-center justify-center text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading && <Loading />}
                    {error && <p>Error loading structures: {error.message}</p>}
                    {!loading && !error && structures.map((item) => (
                        <div key={item["uuid"]}
                             className="bg-card border border-gray-200 rounded-lg overflow-hidden shadow-md p-4">
                            <div className="block">
                                <div className='overflow-hidden rounded-lg'>
                                    <img
                                        className="w-full h-96 object-cover rounded-lg mb-4"
                                        src={`https://tawangsari.com/api/${item["image_path"]}`}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.src = Guest;
                                        }}
                                    />
                                </div>
                                <div
                                    className="bg-card md:h-max text-white p-4 rounded-lg flex flex-col justify-between text-center">
                                    <h5 className="text-xl font-bold mb-2">{item.level}</h5>
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
};
