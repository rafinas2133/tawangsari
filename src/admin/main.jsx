import React, { useState } from 'react';
import {AdminPages} from "../components/AdminPages";
import { Navbar } from '../components/Navbar';

export const AdminPage = () => {
    return (
            <div>
              <Navbar />
              <AdminPages />
            </div>
    );
};
