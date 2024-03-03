
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from './Modal';

const Incidents = () => {
const [selectedIncident, setSelectedIncident] = useState(null);

  const navigate = useNavigate();
  const goBackToDashboard = () => {
    navigate('/dashboard');
  };
  // Replace with your actual data
  const incidents = [
    { id: 2, src: '3.mp4', alt: 'Fire Video', type: 'video', fileName: 'Forest.mp4', date: '2021-08-20', timestamp: '5:35'},
    { id: 2, src: '2.jpg', alt: 'Stacked logs', type: 'image', fileName: 'Forest.jpg', date: '2021-07-20', timestamp: '15:35'},
    { id: 3, src: '3.jpg', alt: 'Blue wooden texture', alt: 'Surveillance video', type: 'image', fileName: 'Surveillance.jpg', date: '2021-07-21', timestamp: '12:15' },// Incidents.js

    // ... your incidents data
  ];

  const handleOpenModal = (incident) => {
    setSelectedIncident(incident);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedIncident(null);
  };
  return (
    <div>
    <div className="bg-gray-100 p-5">
      <h2 className="text-2xl font-semibold mb-6">Receant Fire Incidents</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="aspect-w-1 aspect-h-1" onClick={() => handleOpenModal(incident)}>
            {incident.type === 'video' ? (
              <video controls src={incident.src} className="object-cover rounded-lg" />
            ) : (
              <img src={incident.src} alt={incident.alt} className="object-cover rounded-lg" />
            )}
          </div>
        ))}
      </div>
      {selectedIncident && (
        <Modal
          isOpen={Boolean(selectedIncident)}
          handleClose={handleCloseModal}
          content={{ src: selectedIncident.src, type: selectedIncident.type }}
          details={{ fileName: selectedIncident.fileName, date: selectedIncident.date, timestamp: selectedIncident.timestamp }}
        />
      )}
      <button 
        className="mb-4 text-indigo-600 hover:text-indigo-800" 
        onClick={goBackToDashboard}>
        ← Back to Dashboard
      </button>
    </div>
      
    </div>
  );
};

export default Incidents;
