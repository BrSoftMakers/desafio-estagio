import React, { useState } from 'react';

interface CardAnimalProps {
  name: string;
  owner: string;
  animalType: string;
  onAnimalClick: () => void;
  isInfoCardOpen: boolean;
}

const CardAnimal: React.FC<CardAnimalProps> = ({ name, owner, animalType, onAnimalClick, isInfoCardOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimalIcon = () => {
    if (animalType === 'dog') {
      return '/images/dog-vector.png'; 
    } else if (animalType === 'cat') {
      return '/images/gato-vector.png'; 
    }
    return null;
  };

  const animalIcon = getAnimalIcon();

  return (
    <div
    className={`p-4 rounded-xl mb-4 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-2 hover:border-indigo-600 hover:shadow-indigo-800 ${
      (isInfoCardOpen || isHovered)
        ? 'border-2 border-indigo-600 text-white'
        : 'transform hover:scale-105 bg-gradient-to-r from-indigo-950 to-blue-950 text-white'
    }`}
    
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex items-center justify-between mb-2"
        onClick={() => {
          onAnimalClick();
        }}
      >
        <div className="flex items-center space-x-2">
          {animalIcon && (
            <img
              src={animalIcon}
              alt="Animal Icon"
              className="w-16 h-16 rounded-full bg-indigo-500 p-1 ml-1"
            />
          )}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 ml-2">
              <img
                src="/images/coleira-vector.png" 
                alt="Profile Icon"
                className="w-4 h-4"
              />
              <span className="font-semibold">{name}</span>
            </div>
            <div className="flex items-center space-x-2 ml-2">
              <img
                src="/images/profile-vector.png" 
                alt="Coleira Icon"
                className="w-4 h-4"
              />
              <span className="text-gray-400">{owner}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnimal;
