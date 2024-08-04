import axiosInstance from './axiosInterceptor';

const API_URL = '/news';

export const fetchNewsData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchNewsById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postNews = async (newsData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.post(API_URL, newsData, {
            headers: {
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
        const response = await axiosInstance.post(`${API_URL}/${uuid}`, updatedItem, {
            headers: {
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
        const response = await axiosInstance.delete(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
