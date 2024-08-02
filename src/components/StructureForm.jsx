import React, { useState, useEffect } from 'react';
import { fetchStructuresData, postStructures, updateStructures, deleteStructures } from '../api/structuresAPI';
import Modal from './Modal';
import Form from './Form';
import Table from './Table';

const StructuresForm = () => {
  const [structuresItem, setStructuresItem] = useState({
    name: '',
    level: '',
    nip: '',
    upper_level_uuid: '',
    address: '',
    image: null,
  });
  const [structuresList, setStructuresList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'level', label: 'Level', type: 'text' },
    { name: 'nip', label: 'NIP', type: 'text' },
    { name: 'upper_level_uuid', label: 'Upper Level', type: 'text' },
    { name: 'image', label: 'Image', type: 'file' }
  ];

  const columns = [
    { label: 'Name', accessor: 'name' },
    { label: 'Level', accessor: 'level' },
    { label: 'NIP', accessor: 'nip' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchStructuresData();
        setStructuresList(data);
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
    setStructuresItem({
      ...structuresItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editItem) {
        await updateStructures(editItem.uuid, structuresItem);
        setModalTitle('Success');
        setModalMessage('Structures updated successfully');
      } else {
        await postStructures(structuresItem);
        setModalTitle('Success');
        setModalMessage('Structures added successfully');
      }
      setStructuresItem({
        name: '',
        level: '',
        nip: '',
        upper_level_uuid: '',
        image: null,
      });
      setEditItem(null);
      const data = await fetchStructuresData();
      setStructuresList(data);
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
    setStructuresItem({
      name: item.name || '',
      level: item.level || '',
      nip: item.nip || '',
      upper_level_uuid: item.upper_level_uuid || '',
      image: null,
    });
    setModalTitle('Edit Structures');
    setModalMessage('Edit the Structures details below');
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await deleteStructures(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('Structures deleted successfully');
      const data = await fetchStructuresData();
      setStructuresList(data);
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
        <h2 className="text-2xl font-bold">Structures Management</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setStructuresItem({
              title: '',
              description: '',
              owner: '',
              contact_person: '',
              address: '',
              image: null,
              google_map_link: ''
            });
            setModalTitle('Add Structures');
            setModalMessage('Fill in the Structures details below');
            setModalVisible(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Structures
        </button>
      </div>

      <Table data={structuresList} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        <Form onSubmit={handleSubmit} fields={fields} handleChange={handleChange} data={structuresItem} loading={loading} />
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

export default StructuresForm;
