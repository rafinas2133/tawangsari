import React, { useState } from 'react';
import Modal from './Modals';

const GalleryForm = ({ galleries, addGallery, updateGallery, deleteGallery, loading, error }) => {
  const [newItem, setNewItem] = useState({
    images: []
  });
  const [editItem, setEditItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleImageChange = (e) => {
    setNewItem({
      ...newItem,
      images: [...e.target.files]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateGallery(editItem.uuid, newItem);
        setModalTitle('Success');
        setModalMessage('Gallery updated successfully');
      } else {
        await addGallery(newItem);
        setModalTitle('Success');
        setModalMessage('Gallery added successfully');
      }
      setNewItem({
        images: []
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
    setNewItem(item);
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    try {
      await deleteGallery(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('Gallery deleted successfully');
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
        <h2 className="text-2xl mb-4">{editItem ? 'Edit Gallery' : 'Add Gallery'}</h2>
        <div className="mb-4">
          <label className="block mb-2">Images</label>
          <input name="images" type="file" multiple onChange={handleImageChange} className="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editItem ? 'Update' : 'Submit'}
        </button>
        {loading && <p>Loading...</p>}
      </form>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Gallery List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Images</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleries.map((item) => (
              <tr key={item.uuid}>
                <td className="border px-4 py-2">
                  {item.images.map((img, index) => (
                    <img key={index} src={`https://tawangsari.com/${img}`} alt="Gallery" className="w-16 h-16 inline-block mr-2" />
                  ))}
                </td>
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

export default GalleryForm;
