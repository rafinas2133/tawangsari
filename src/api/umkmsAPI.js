import axiosInstance from './axiosInterceptor';

const API_URL = '/umkms';

export const fetchUmkmsData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchUmkmById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postUmkm = async (umkmData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.post(API_URL, umkmData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const updateUmkm = async (uuid, updatedItem) => {
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

export const deleteUmkm = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.delete(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
