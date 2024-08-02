import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/umkms';
const AUTH_TOKEN = localStorage.getItem('token');

export const fetchUmkmsData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchUmkmById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
