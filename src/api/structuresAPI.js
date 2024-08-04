import axiosInstance from './axiosInterceptor';

const API_URL = '/structures';

export const fetchStructuresData = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const fetchStructuresById = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.get(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const postStructures = async (StructuresData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.post(API_URL, StructuresData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data.data;
    } catch (err) {
        throw err;
    }
};

export const updateStructures = async (uuid, updatedItem) => {
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

export const deleteStructures = async (uuid) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axiosInstance.delete(`${API_URL}/${uuid}`);
        return response.data.data;
    } catch (err) {
        throw err;
    }
};
