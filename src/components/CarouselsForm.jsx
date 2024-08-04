import React, { useState, useEffect } from 'react';
import { fetchCarouselsData, postCarousels, updateCarousels, deleteCarousels } from '../api/carouselsAPI';
import Modal from './Modal';
import Form from './Form';
import Table from './Table';

const CarouselsForm = () => {
  const [carouselsItem, setCarouselsItem] = useState({
    image: null,
  });
  const [carouselsList, setCarouselsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  const fields = [
    { name: 'image', label: 'Image', type: 'file' }
  ];

  const columns = [
    { label: 'Image', accessor: 'image' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCarouselsData();
        setCarouselsList(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCarouselsItem({
      ...carouselsItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editItem) {
        await updateCarousels(editItem.uuid, carouselsItem);
        setModalTitle('Success');
        setModalMessage('Carousels updated successfully');
      } else {
        await postCarousels(carouselsItem);
        setModalTitle('Success');
        setModalMessage('Carousels added successfully');
      }
      setCarouselsItem({
        image: null,
      });
      setEditItem(null);
      const data = await fetchCarouselsData();
      setCarouselsList(data);
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
    setCarouselsItem({
      image: null,
    });
    setModalTitle('Edit Carousels');
    setModalMessage('Edit the Carousels details below');
    setModalVisible(true);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await deleteCarousels(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('Carousels deleted successfully');
      const data = await fetchCarouselsData();
      setCarouselsList(data);
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
        <h2 className="text-2xl font-bold">Carousels Management</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setCarouselsItem({
              image: null,
            });
            setModalTitle('Add Carousels');
            setModalMessage('Fill in the Carousels details below');
            setModalVisible(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Carousels
        </button>
      </div>

      <Table data={carouselsList} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        <Form onSubmit={handleSubmit} fields={fields} handleChange={handleChange} data={carouselsItem} loading={loading} />
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

export default CarouselsForm;
