import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/carousels';

const useCarousels = () => {
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCarousels = useCallback( async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setCarousels(response.data.data || []);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    fetchCarousels();
  }, []);

  const addCarousel = async (carousel) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in carousel) {
        formData.append(key, carousel[key]);
      }
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCarousels([...carousels, response.data.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateCarousel = async (uuid, carousel) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in carousel) {
        formData.append(key, carousel[key]);
      }
      const response = await axios.put(`${API_URL}/${uuid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCarousels(
        carousels.map((item) => (item.uuid === uuid ? response.data.data : item))
      );
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteCarousel = async (uuid) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${uuid}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCarousels(carousels.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    carousels,
    loading,
    error,
    fetchCarousels,
    addCarousel,
    updateCarousel,
    deleteCarousel,
  };
};

export default useCarousels;
