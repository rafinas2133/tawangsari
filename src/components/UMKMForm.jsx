import React, { useState, useEffect } from 'react';
import useUMKM from '../hooks/useUMKM';
import Modal from './Modal';
import Input from './Input';
import Form from './Form';

const UMKMForm = () => {
  const [umkmItem, setUMKMItem] = useState({
    title: '',
    description: '',
    owner: '',
    contact_person: '',
    address: '',
    image: null,
    google_map_link: ''
  });
  const { addUMKM, updateUMKM, deleteUMKM, loading, error, fetchUMKM, umkmList = [] } = useUMKM();

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchUMKM();
  }, [fetchUMKM]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUMKMItem({
      ...umkmItem,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateUMKM(editItem.uuid, umkmItem);
        setModalTitle('Success');
        setModalMessage('UMKM updated successfully');
      } else {
        await addUMKM(umkmItem);
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
    } catch (err) {
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'An error occurred');
    } finally {
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
      <Form onSubmit={handleSubmit} loading={loading}>
        <h2 className="text-2xl mb-4">{editItem ? 'Edit UMKM' : 'Add UMKM'}</h2>
        <Input label="Title" name="title" value={umkmItem.title} onChange={handleChange} />
        <Input label="Description" name="description" value={umkmItem.description} onChange={handleChange} type="textarea" />
        <Input label="Owner" name="owner" value={umkmItem.owner} onChange={handleChange} />
        <Input label="Contact Person" name="contact_person" value={umkmItem.contact_person} onChange={handleChange} />
        <Input label="Google Maps Link" name="google_map_link" value={umkmItem.google_map_link} onChange={handleChange} />
        <Input label="Image" name="image" type="file" onChange={handleChange} />
      </Form>

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
            {umkmList.map((item) => (
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
      >
        {editItem && (
          <Form onSubmit={handleSubmit} loading={loading}>
            <Input label="Title" name="title" value={umkmItem.title} onChange={handleChange} />
            <Input label="Description" name="description" value={umkmItem.description} onChange={handleChange} type="textarea" />
            <Input label="Owner" name="owner" value={umkmItem.owner} onChange={handleChange} />
            <Input label="Contact Person" name="contact_person" value={umkmItem.contact_person} onChange={handleChange} />
            <Input label="Google Maps Link" name="google_map_link" value={umkmItem.google_map_link} onChange={handleChange} />
            <Input label="Image" name="image" type="file" onChange={handleChange} />
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

export default UMKMForm;
