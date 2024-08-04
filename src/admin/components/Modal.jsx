// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                <button onClick={onClose} className="absolute top-2 right-4 text-2xl">
                    &times;
                </button>
                <div className="max-h-[80vh] overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};
