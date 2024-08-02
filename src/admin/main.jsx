// src/admin/AdminPage.js
// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar} from '../components/Navbar';
import {AdminPages} from "../components/AdminPages";

export const AdminPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin');
        }
    }, [navigate]);

    return (
        <div>
            <Navbar/>
            <AdminPages/>
        </div>
    );
};
