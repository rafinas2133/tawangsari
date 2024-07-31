// src/admin/AdminPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { AdminPages } from "../components/AdminPages";

export const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token in AdminPage useEffect:', token);
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <AdminPages />
    </div>
  );
};
