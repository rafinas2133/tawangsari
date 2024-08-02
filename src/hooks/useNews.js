import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/news';
const AUTH_TOKEN = localStorage.getItem('token'); // Replace with actual token

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    console.log('fetchNews called');
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNews(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addNews = async (newItem) => {
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
      setNews((prevNews) => [...prevNews, response.data.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const updateNews = async (uuid, updatedItem) => {
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
      setNews((prevNews) =>
        prevNews.map((item) => (item.uuid === uuid ? response.data.data : item))
      );
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const deleteNews = async (uuid) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${uuid}`, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setNews((prevNews) => prevNews.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { news, loading, error, addNews, updateNews, deleteNews, fetchNews };
};

export default useNews;
