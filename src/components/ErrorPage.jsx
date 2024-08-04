// src/ErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800">Page Not Found</p>
        <p className="mt-4 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <button 
          onClick={handleGoHome} 
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
