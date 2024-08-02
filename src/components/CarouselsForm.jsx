// components/CarouselsForm.js
import React, { useState, useEffect } from 'react';
import useCarousels from '../hooks/useCarousels';
import Modal from './Modal';
import Input from './Input';
import Form from './Form';

const CarouselsForm = () => {
  const [carousel, setCarousel] = useState({ images: [] });
  const { carousels, addCarousel, updateCarousel, deleteCarousel, loading, error, fetchCarousels } = useCarousels();

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchCarousels();
  }, [fetchCarousels]);

  const handleImageChange = (e) => {
    setCarousel({ ...carousel, images: [...e.target.files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateCarousel(editItem.uuid, carousel);
        setModalTitle('Success');
        setModalMessage('Carousel updated successfully');
      } else {
        await addCarousel(carousel);
        setModalTitle('Success');
        setModalMessage('Carousel added successfully');
      }
      setCarousel({ images: [] });
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
    setCarousel(item);
    setModalVisible(false);
  };

  const handleDelete = async (item) => {
    setConfirmVisible(true);
    setEditItem(item);
  };

  const confirmDelete = async () => {
    try {
      await deleteCarousel(editItem.uuid);
      setModalTitle('Success');
      setModalMessage('Carousel deleted successfully');
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
        <h2 className="text-2xl mb-4">{editItem ? 'Edit Carousel' : 'Add Carousel'}</h2>
        <Input label="Images" name="images" type="file" multiple onChange={handleImageChange} />
      </Form>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Carousel List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Images</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {carousels && carousels.map((item) => (
              <tr key={item.uuid}>
                <td className="border px-4 py-2">
                  {item.images && item.images.map((img, index) => (
                    <img key={index} src={`https://tawangsari.com/${img}`} alt="Carousel" className="w-16 h-16 inline-block mr-2" />
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

export default CarouselsForm;
