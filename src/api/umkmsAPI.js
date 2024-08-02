import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/umkms';
const AUTH_TOKEN = localStorage.getItem('token');

export const fetchUmkmsData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchUmkmById = async (uuid) => {
    try {
        const response = await axios.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postUmkm = async (umkmData) => {
    try {
        const formData = new FormData();
        for (const key in umkmData) {
            formData.append(key, umkmData[key]);
        }

        const response = await axios.post(API_URL, formData, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const updateUmkm = async (uuid, updatedItem) => {
    try {
        const formData = new FormData();
        for (const key in updatedItem) {
            formData.append(key, updatedItem[key]);
        }

        const response = await axios.post(`${API_URL}/${uuid}`, formData, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const deleteUmkm = async (uuid) => {
    try {
        const response = await axios.delete(`${API_URL}/${uuid}`, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};
