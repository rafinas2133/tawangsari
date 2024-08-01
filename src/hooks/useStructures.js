import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/structures';
const AUTH_TOKEN = localStorage.getItem('token'); // Replace with actual token

const useStructures = () => {
  const [structures, setStructures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStructures = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setStructures(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStructures();
  }, [fetchStructures]);

  const addStructure = async (structure) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in structure) {
        formData.append(key, structure[key]);
      }
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setStructures([...structures, response.data.data]);
      setLoading(false);
      return response.data.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const updateStructure = async (uuid, structure) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in structure) {
        formData.append(key, structure[key]);
      }
      const response = await axios.put(`${API_URL}/${uuid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setStructures(
        structures.map((item) => (item.uuid === uuid ? response.data.data : item))
      );
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const deleteStructure = async (uuid) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${uuid}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setStructures(structures.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return {
    structures,
    loading,
    error,
    fetchStructures,
    addStructure,
    updateStructure,
    deleteStructure,
  };
};

export default useStructures;
