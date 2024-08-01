import React, { useState } from 'react';
import Modal from '../components/Modal';

const UMKMForm = ({ umkm, addUMKM, updateUMKM, deleteUMKM, loading, error }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    owner: '',
    contact_person: '',
    address: '',
    image: null,
    google_map_link: ''
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
        await updateUMKM(editItem.uuid, newItem);
        setModalTitle('Success');
        setModalMessage('UMKM updated successfully');
      } else {
        await addUMKM(newItem);
        setModalTitle('Success');
        setModalMessage('UMKM added successfully');
      }
      setNewItem({
        title: '',
        description: '',
        owner: '',
        contact_person: '',
        address: '',
        image: null,
        google_map_link: ''
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
    setModalVisible(false);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    try {
      await deleteUMKM(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('UMKM deleted successfully');
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
        <h2 className="text-2xl mb-4">{editItem ? 'Edit UMKM' : 'Add UMKM'}</h2>
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
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={newItem.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Owner</label>
          <input
            name="owner"
            value={newItem.owner}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Contact Person</label>
          <input
            name="contact_person"
            value={newItem.contact_person}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Google Maps Link</label>
          <input
            name="google_map_link"
            value={newItem.google_map_link}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image</label>
          <input
            name="image"
            type="file"
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
        <h2 className="text-2xl mb-4">UMKM List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Description</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {umkm.map((item) => (
              <tr key={item.uuid}>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.description}</td>
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

export default UMKMForm;
