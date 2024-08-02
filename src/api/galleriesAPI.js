import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/galleries';
const AUTH_TOKEN = localStorage.getItem('token');

export const fetchGalleriesData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchGalleriesById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postGalleries = async (GalleriesData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const formData = new FormData();
        for (const key in GalleriesData) {
            formData.append(key, GalleriesData[key]);
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

export const updateGalleries = async (uuid, updatedItem) => {
    // eslint-disable-next-line no-useless-catch
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

export const deleteGalleries = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
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