import axiosInstance from './axiosInterceptor';

const API_URL = '/galleries';

export const fetchGalleriesData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchGalleriesById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postGalleries = async (GalleriesData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.post(API_URL, GalleriesData, {
            headers: {
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

export const deleteGalleries = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.delete(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
