
import React from 'react';

interface AnimalInfoCardProps {
  id: number;
  phoneNumber: string;
  owner: string;
  breed: string;
  birthDate: any;
  onDelete: () => Promise<void>;
  onEdit: () => void;
}

const AnimalInfoCard: React.FC<AnimalInfoCardProps> = ({ id, phoneNumber, owner, breed, birthDate, onDelete, onEdit }) => {
  const calculateAge = (): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  return (
    <div className="text-white border-2 border-indigo-600 bg-gradient-to-r from-blue-950 bg-indigo-950 rounded-xl shadow-md mb-4 p-6 relative">
      <div className="flex items-center">
        <div className="mr-2">
          <img src="/images/telefone-vector.png" alt="telefone-icon" className="w-5 h-5" />
        </div>
        <p>Telefone: {phoneNumber}</p>
      </div>

      <div className="flex items-center mt-2">
        <div className="mr-2">
          <img src="/images/raca-vector.png" alt="raca-icon" className="w-5 h-5" />
        </div>
        <p>Raça: {breed}</p>
      </div>

      <div className="flex items-center mt-2">
        <div className="mr-2">
          <img src="/images/idade-vector.png" alt="idade-icon" className="w-5 h-5" />
        </div>
        <p>Idade: {age} anos</p>
      </div>

      <div className="flex justify-end flex-col gap-3 text-center mt-4">
        <button onClick={onDelete} className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-800 transition-all duration-300 w-full">
          Remover
        </button>
        <button onClick={onEdit} className="bg-white text-black p-2 rounded hover:bg-gray-300 transition-all duration-300 w-full">
          Editar
        </button>
      </div>
    </div>
  );
};

export default AnimalInfoCard;
