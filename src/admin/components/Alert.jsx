// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';

// eslint-disable-next-line react/prop-types
export const Alert = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);
    const alertStyles = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700'
    };

    const iconStyles = {
        success: (
            <svg className="w-6 h-6 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4a1 1 0 102 0v-4a1 1 0 10-2 0v4zm0-6a1 1 0 102 0v-2a1 1 0 10-2 0v2z"
                      clipRule="evenodd"/>
            </svg>
        ),
        error: (
            <svg className="w-6 h-6 text-red-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 4a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0V7a1 1 0 012 0v3z"
                      clipRule="evenodd"/>
            </svg>
        )
    };

    return (
        <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 w-11/12 md:w-1/2 p-4 border-2 rounded-xl ${alertStyles[type]} flex items-center z-50 shadow-lg`}>
            {iconStyles[type]}
            <p className="text-sm flex-grow">{message}</p>
            <button onClick={onClose} className="text-xl font-bold ml-4">&times;</button>
        </div>
    );
};
