import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/umkms';
const AUTH_TOKEN = localStorage.getItem('token'); // Replace with actual token

const useUMKM = () => {
  const [umkm, setUMKM] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUMKM = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setUMKM(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  const addUMKM = async (newItem) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in newItem) {
        formData.append(key, newItem[key]);
      }
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setUMKM([...umkm, response.data.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const updateUMKM = async (uuid, updatedItem) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in updatedItem) {
        formData.append(key, updatedItem[key]);
      }
      const response = await axios.put(`${API_URL}/${uuid}`, formData, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setUMKM(umkm.map((item) => (item.uuid === uuid ? response.data.data : item)));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const deleteUMKM = async (uuid) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${uuid}`, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setUMKM(umkm.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchUMKM();
  }, [fetchUMKM]);

  return { umkm, loading, error, addUMKM, updateUMKM, deleteUMKM, fetchUMKM };
};

export default useUMKM;
