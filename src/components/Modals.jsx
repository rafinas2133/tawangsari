import React from 'react';

const Modal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
        <div className="px-4 py-2 bg-gray-800 text-white">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="p-4">
          <p>{message}</p>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
