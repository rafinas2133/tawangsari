import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://tawangsari.com/api/news';
const AUTH_TOKEN = localStorage.getItem('token'); // Replace with actual token

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNews(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addNews = async (newItem) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, newItem, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setNews([...news, response.data.data]);
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
      const response = await axios.put(`${API_URL}/${uuid}`, updatedItem, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setNews(news.map((item) => (item.uuid === uuid ? response.data.data : item)));
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
      setNews(news.filter((item) => item.uuid !== uuid));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { news, loading, error, addNews, updateNews, deleteNews };
};

export default useNews;
