// Modal.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, handleClose, content, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded-lg max-w-4xl w-full flex overflow-hidden">
        <div className="w-1/2 p-4">
          {content.type === 'video' ? (
            <video controls src={content.src} className="w-full h-full object-cover"></video>
          ) : (
            <img src={content.src} alt={details.fileName} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="w-1/2 p-4 flex flex-col">
          <div className="mb-4">
            <button onClick={handleClose} className="ml-auto">
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-medium mb-2">{details.fileName}</h4>
            <p>Date: {details.date}</p>
            <p>Timestamp: {details.timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
