import axiosInstance from './axiosInterceptor';

const LOGIN_API_URL = '/login';

export const login = async (username, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const formData = { username, password };

        const response = await axiosInstance.post(LOGIN_API_URL, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.user.name);

        return data;
    } catch (err) {
        throw err;
    }
};
