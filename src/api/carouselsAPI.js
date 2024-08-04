import axiosInstance from './axiosInterceptor';

const API_URL = '/carousels';

export const fetchCarouselsData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchCarouselsById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postCarousels = async (CarouselsData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.post(API_URL, CarouselsData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const updateCarousels = async (uuid, updatedItem) => {
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

export const deleteCarousels = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.delete(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
