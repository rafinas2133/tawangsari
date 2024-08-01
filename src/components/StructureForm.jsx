import React, { useState, useEffect } from 'react';
import useStructures from '../hooks/useStructures';
import Modal from '../components/Modal';

const StructureForm = () => {
  const [structure, setStructure] = useState({
    level: '',
    name: '',
    nip: '',
    image: null,
    upper_level_uuid: '', // Upper level UUID
  });
  const { addStructure, updateStructure, deleteStructure, loading, error, fetchStructures, structures } = useStructures();

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchStructures(); // Ensure fetchStructures is called
  }, [fetchStructures]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStructure({
      ...structure,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateStructure(editItem.uuid, structure);
        setModalTitle('Success');
        setModalMessage('Structure updated successfully');
      } else {
        await addStructure(structure);
        setModalTitle('Success');
        setModalMessage('Structure added successfully');
      }
      setStructure({
        level: '',
        name: '',
        nip: '',
        image: null,
        upper_level_uuid: '', // Upper level UUID
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
    setStructure({
      level: item.level || '',
      name: item.name || '',
      nip: item.nip || '',
      image: item.image || null,
      upper_level_uuid: item.upper_level_uuid || ''
    });
    setModalTitle('Edit Structure');
    setModalMessage('Edit the structure details below');
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    try {
      await deleteStructure(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('Structure deleted successfully');
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
        <h2 className="text-2xl mb-4">{editItem ? 'Edit Structure' : 'Add Structure'}</h2>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            name="level"
            value={structure.level}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            name="name"
            value={structure.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">NIP</label>
          <input
            name="nip"
            value={structure.nip}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Upper Level</label>
          <select
            name="upper_level_uuid"
            value={structure.upper_level_uuid}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select an upper level</option>
            {structures.map((s) => (
              <option key={s.uuid} value={s.uuid}>
                {s.name}
              </option>
            ))}
          </select>
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editItem ? 'Update' : 'Submit'}
        </button>
        {loading && <p>Loading...</p>}
      </form>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Structure List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Name</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {structures.map((item) => (
              <tr key={item.uuid}>
                <td className="border px-4 py-2">{item.level}</td>
                <td className="border px-4 py-2">{item.name}</td>
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
      >
        {editItem && (
          <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                name="level"
                value={structure.level}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                name="name"
                value={structure.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">NIP</label>
              <input
                name="nip"
                value={structure.nip}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Upper Level</label>
              <select
                name="upper_level_uuid"
                value={structure.upper_level_uuid}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select an upper level</option>
                {structures.map((s) => (
                  <option key={s.uuid} value={s.uuid}>
                    {s.name}
                  </option>
                ))}
              </select>
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </form>
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

export default StructureForm;
