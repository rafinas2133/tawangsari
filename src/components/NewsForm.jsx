import React, { useState } from 'react';
import Modal from '../components/Modal';

const NewsForm = ({ news, addNews, updateNews, deleteNews, loading, error }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    content: '',
    image: '',
    timestamp: '',
    uploader: ''
  });
  const [editItem, setEditItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewItem({
      ...newItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateNews(editItem.uuid, newItem);
        setModalTitle('Success');
        setModalMessage('News updated successfully');
      } else {
        await addNews(newItem);
        setModalTitle('Success');
        setModalMessage('News added successfully');
      }
      setNewItem({
        title: '',
        content: '',
        image: '',
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
    setNewItem({
      title: item.title || '',
      content: item.content || '',
      image: item.image || '',
      timestamp: item.timestamp || '',
      uploader: item.uploader || ''
    });
    setModalVisible(false);
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
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
        <h2 className="text-2xl mb-4">{editItem ? 'Edit News' : 'Add News'}</h2>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            name="title"
            value={newItem.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            name="content"
            value={newItem.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image Path</label>
          <input
            name="image"
            value={newItem.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Timestamp</label>
          <input
            name="timestamp"
            type="datetime-local"
            value={newItem.timestamp}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Uploader</label>
          <input
            name="uploader"
            value={newItem.uploader}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editItem ? 'Update' : 'Submit'}
        </button>
        {loading && <p>Loading...</p>}
      </form>

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
            {news.map((item) => (
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
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
        message={modalMessage}
      />

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
