import React, { useState, useEffect } from 'react';
import { fetchNewsData, postNews, updateNews, deleteNews } from '../api/newsAPI';
import Modal from './Modal';
import Form from './Form';
import Table from './Table';

const NewsForm = () => {
  const [newsItem, setNewsItem] = useState({
    title: '',
    content: '',
    image: null,
    uploaded_by: '',
    created_at: ''
  });
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  const fields = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'content', label: 'Content', type: 'textarea' },
    { name: 'image', label: 'Image', type: 'file' },
  ];

  const columns = [
    { label: 'Title', accessor: 'title' },
    { label: 'Content', accessor: 'content' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchNewsData();
        setNewsList(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewsItem({
      ...newsItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editItem) {
        await updateNews(editItem.uuid, newsItem);
        setModalTitle('Success');
        setModalMessage('News updated successfully');
      } else {
        await postNews(newsItem);
        setModalTitle('Success');
        setModalMessage('News added successfully');
      }
      setNewsItem({
        title: '',
        content: '',
        image: null,
        uploaded_by: '',
        created_at: ''
      });
      setEditItem(null);
      const data = await fetchNewsData();
      setNewsList(data);
    } catch (err) {
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
      setModalVisible(true);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewsItem({
      title: item.title || '',
      content: item.content || '',
      image: null,
      uploaded_by: item.uploaded_by || '',
      created_at: item.created_at || ''
    });
    setModalTitle('Edit News');
    setModalMessage('Edit the news details below');
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await deleteNews(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('News deleted successfully');
      const data = await fetchNewsData();
      setNewsList(data);
    } catch (err) {
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
      setConfirmVisible(false);
      setModalVisible(true);
      setEditItem(null);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setConfirmVisible(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">News Management</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setNewsItem({
              title: '',
              content: '',
              image: null,
              uploaded_by: '',
              created_at: ''
            });
            setModalTitle('Add News');
            setModalMessage('Fill in the news details below');
            setModalVisible(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add News
        </button>
      </div>

      <Table data={newsList} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        <Form onSubmit={handleSubmit} fields={fields} handleChange={handleChange} data={newsItem} loading={loading} />
      </Modal>

      <Modal
        show={confirmVisible}
        onClose={handleCloseModal}
        title="Confirm Delete"
      >
        <div className="flex justify-center items-center">
          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
            Confirm
          </button>
          <button onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NewsForm;
