import { useState } from 'react';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://tawangsari.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('name', data.data.user.name);
        return { success: true, data: data.data };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, message: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};