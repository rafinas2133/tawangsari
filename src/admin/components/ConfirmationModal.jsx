// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-xl">
                    &times;
                </button>
                <div className="p-4">
                    <p className="mb-4">{message}</p>
                    <div className="flex justify-end space-x-2">
                        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                            Cancel
                        </button>
                        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
