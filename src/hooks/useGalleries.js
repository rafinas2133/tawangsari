import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/galleries';
const AUTH_TOKEN = localStorage.getItem('token'); // Replace with actual token

const useGalleries = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGalleries = useCallback( async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setGalleries(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  },[]);

  const addGallery = async (newItem) => {
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
      setGalleries([...galleries, response.data.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const updateGallery = async (uuid, updatedItem) => {
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
      setGalleries(galleries.map((item) => (item.uuid === uuid ? response.data.data : item)));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const deleteGallery = async (uuid) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${uuid}`, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setGalleries(galleries.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { galleries, loading, error, fetchGalleries, addGallery, updateGallery, deleteGallery };
};

export default useGalleries;
