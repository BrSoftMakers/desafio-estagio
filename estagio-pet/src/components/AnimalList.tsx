import React, { useState } from 'react';
import CardAnimal from './CardAnimal';

interface AnimalData {
  name: string;
  owner: string;
  animalType: string;
}

interface AnimalListProps {
  animals: AnimalData[];
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const totalPages = Math.ceil(animals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentAnimals = animals.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {currentAnimals.map((animal, index) => (
        <CardAnimal
          key={index}
          name={animal.name}
          owner={animal.owner}
          animalType={animal.animalType}
          onAnimalClick={() => {
          }}
          isInfoCardOpen={false}  
        />
      ))}
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-gray-300 text-gray-700 p-2 rounded">
          Anterior
        </button>
        <span className="text-gray-700 mx-2">{`Página ${currentPage} de ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-300 text-gray-700 p-2 rounded">
          Próxima
        </button>
      </div>
    </div>
  );
};

export default AnimalList;
