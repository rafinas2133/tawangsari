import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/news';
const AUTH_TOKEN = localStorage.getItem('token');

export const fetchNewsData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
        });
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchNewsById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(`${API_URL}/${uuid}`, {
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
            },
        });
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postNews = async (newsData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const formData = new FormData();
        for (const key in newsData) {
            formData.append(key, newsData[key]);
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

export const updateNews = async (uuid, updatedItem) => {
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

export const deleteNews = async (uuid) => {
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