import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {

  const { logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">Admin Dashboard</div>
        <button onClick={logout} className="bg-red-500 text-white p-2 rounded-md">
        Logout
      </button>
      </div>
    </nav>
  );
};

