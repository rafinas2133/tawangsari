import React, { useState, useEffect } from 'react';
import useNews from '../hooks/useNews';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Form from '../components/Form';

const NewsForm = () => {
  const [newsItem, setNewsItem] = useState({
    title: '',
    content: '',
    image: null,
    timestamp: '',
    uploader: ''
  });
  const { news, addNews, updateNews, deleteNews, loading, error, fetchNews } = useNews();

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewsItem({
      ...newsItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateNews(editItem.uuid, newsItem);
        setModalTitle('Success');
        setModalMessage('News updated successfully');
      } else {
        await addNews(newsItem);
        setModalTitle('Success');
        setModalMessage('News added successfully');
      }
      setNewsItem({
        title: '',
        content: '',
        image: null,
        timestamp: '',
        uploader: ''
      });
      setEditItem(null);
    } catch (err) {
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'An error occurred');
    } finally {
      setModalVisible(true);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewsItem({
      title: item.title || '',
      content: item.content || '',
      image: item.image || null,
      timestamp: item.timestamp || '',
      uploader: item.uploader || ''
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
    try {
      await deleteNews(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('News deleted successfully');
    } catch (err) {
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'An error occurred');
    } finally {
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
    <div>
      <Form onSubmit={handleSubmit} loading={loading}>
        <h2 className="text-2xl mb-4">{editItem ? 'Edit News' : 'Add News'}</h2>
        <Input label="Title" name="title" value={newsItem.title} onChange={handleChange} />
        <Input label="Content" name="content" value={newsItem.content} onChange={handleChange} type="textarea" />
        <Input label="Image" name="image" type="file" onChange={handleChange} />
        <Input label="Timestamp" name="timestamp" value={newsItem.timestamp} onChange={handleChange} type="datetime-local" />
        <Input label="Uploader" name="uploader" value={newsItem.uploader} onChange={handleChange} />
      </Form>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">News List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Content</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news && news.length > 0 ? (
              news.map((item) => (
                <tr key={item.uuid}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.content}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border px-4 py-2 text-center">No news available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
        message={modalMessage}
      >
        {editItem && (
          <Form onSubmit={handleSubmit} loading={loading}>
            <Input label="Title" name="title" value={newsItem.title} onChange={handleChange} />
            <Input label="Content" name="content" value={newsItem.content} onChange={handleChange} type="textarea" />
            <Input label="Image" name="image" type="file" onChange={handleChange} />
            <Input label="Timestamp" name="timestamp" value={newsItem.timestamp} onChange={handleChange} type="datetime-local" />
            <Input label="Uploader" name="uploader" value={newsItem.uploader} onChange={handleChange} />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </Form>
        )}
      </Modal>

      {confirmVisible && (
        <Modal
          show={confirmVisible}
          onClose={handleCloseModal}
          title="Confirm Delete"
          message="Are you sure you want to delete this item?"
        >
          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
            Confirm
          </button>
          <button onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </Modal>
      )}
    </div>
  );
};

export default NewsForm;
