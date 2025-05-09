"use client";
import { useState } from 'react';
import './styles.css';

export function StudentTypeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const studentTypes = [
    'Undergraduate',
    'Graduate',
    'PhD',
    'Post-Doc',
    'Faculty',
    'Staff'
  ];

  const handleSelect = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  return (
    <div className="studentTypeDropdown">
      <button 
        className="studentTypeButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedType || 'Select Student Type'}
      </button>
      {isOpen && (
        <div className="studentTypeOptions">
          {studentTypes.map((type) => (
            <div
              key={type}
              className="studentTypeOption"
              onClick={() => handleSelect(type)}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 