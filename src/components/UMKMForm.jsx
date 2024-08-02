import React, { useState, useEffect } from 'react';
import { fetchUmkmsData, postUmkm, updateUmkm, deleteUmkm } from '../api/umkmsAPI';
import Modal from './Modal';
import Form from './Form';
import Table from './Table';

const UMKMForm = () => {
  const [umkmItem, setUMKMItem] = useState({
    title: '',
    description: '',
    owner: '',
    contact_person: '',
    image: null,
    google_map_link: ''
  });
  const [umkmList, setUMKMList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  const fields = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'owner', label: 'Owner', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'contact_person', label: 'Contact Person', type: 'text' },
    { name: 'google_map_link', label: 'Google Maps Link', type: 'text' },
    { name: 'image', label: 'Image', type: 'file' }
  ];

  const columns = [
    { label: 'Title', accessor: 'title' },
    { label: 'Description', accessor: 'description' },
    { label: 'Category', accessor: 'category' },
    { label: 'Owner', accessor: 'owner' },
    { label: 'Contact Person', accessor: 'contact_person' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUmkmsData();
        setUMKMList(data);
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
    setUMKMItem({
      ...umkmItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editItem) {
        await updateUmkm(editItem.uuid, umkmItem);
        setModalTitle('Success');
        setModalMessage('UMKM updated successfully');
      } else {
        await postUmkm(umkmItem);
        setModalTitle('Success');
        setModalMessage('UMKM added successfully');
      }
      setUMKMItem({
        title: '',
        description: '',
        owner: '',
        contact_person: '',
        address: '',
        image: null,
        google_map_link: ''
      });
      setEditItem(null);
      const data = await fetchUmkmsData();
      setUMKMList(data);
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
    setUMKMItem({
      title: item.title || '',
      description: item.description || '',
      owner: item.owner || '',
      contact_person: item.contact_person || '',
      address: item.address || '',
      image: null,
      google_map_link: item.google_map_link || ''
    });
    setModalTitle('Edit UMKM');
    setModalMessage('Edit the UMKM details below');
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await deleteUmkm(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('UMKM deleted successfully');
      const data = await fetchUmkmsData();
      setUMKMList(data);
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
        <h2 className="text-2xl font-bold">UMKM Management</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setUMKMItem({
              title: '',
              description: '',
              owner: '',
              contact_person: '',
              address: '',
              image: null,
              google_map_link: ''
            });
            setModalTitle('Add UMKM');
            setModalMessage('Fill in the UMKM details below');
            setModalVisible(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add UMKM
        </button>
      </div>

      <Table data={umkmList} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        <Form onSubmit={handleSubmit} fields={fields} handleChange={handleChange} data={umkmItem} loading={loading} />
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

export default UMKMForm;
