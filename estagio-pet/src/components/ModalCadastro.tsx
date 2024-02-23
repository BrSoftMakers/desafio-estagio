
import React, { useState } from 'react';

interface ModalCadastroProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (animalData: AnimalData) => Promise<void>; 
}

interface AnimalData {
  name: string;
  owner: string;
  phoneNumber: string;
  animalType: string;
  breed: string;
  birthDate: string;
}

const ModalCadastro: React.FC<ModalCadastroProps> = ({ isOpen, onClose, onCreate }) => {
  const [animalData, setAnimalData] = useState<AnimalData | null>({
    name: '',
    owner: '',
    phoneNumber: '',
    animalType: 'dog',
    breed: '',
    birthDate: '',
  });

  const [validationError, setValidationError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnimalData((prevData) => ({ ...prevData!, [name]: value }));
  };

  const handleCreate = () => {
    if (!animalData?.name || !animalData?.owner || !animalData?.phoneNumber || !animalData?.breed || !animalData?.birthDate) {
      setValidationError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setValidationError('');

    onCreate(animalData!);
    setAnimalData(null); 
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-[rgba(0,0,25,0.95)] flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-gradient-to-r from-indigo-950 to-blue-950 p-8 md:p-20 md:py-24 lg:p-12 lg:py-12 lg:text-base md:w-9/12 lg:w-5/12 text-xs rounded-lg shadow-md border-2 border-indigo-600 indigo-box-shadow ">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 rounded-full p-2 mr-2 mt-6 mb-10">
            <img src="/images/add2-vector.png" alt="add-icon" className="w-9 h-9 sm:w-12 sm:h-12 md:h-14 md:w-14" />
          </div>
          <h2 className="text-lg font-bold text-white ml-4 mb-4 md:text-3xl">Cadastrar Animal</h2>
        </div>

        {validationError && <p className="text-red-500 mb-4">{validationError}</p>}

        <div className="grid grid-cols-2 gap-4 w-full mb-4">
          {/* Primeira coluna */}
          <div className="flex flex-col mt-1">
            <div className="mb-4">
              <label className="text-white mb-1 block" htmlFor="name">
                <div className="flex items-center mb-1">
                  <img src="/images/coleira-vector.png" alt="nome-icon" className="w-4 h-4 mr-2" />
                  Nome
                </div>
              </label>
              <input type="text" id="name" name="name" value={animalData?.name || ''} onChange={handleInputChange} placeholder="Nome" className="hover:border rounded-lg w-full p-2 mt-1 opacity-background text-white" />
            </div>

            <div className="mb-4">
              <label className="text-white mb-1 block" htmlFor="owner">
                <div className="flex items-center">
                  <img src="/images/profile-vector.png" alt="dono-icon" className="w-4 h-4 mr-2" />
                  Dono
                </div>
              </label>
              <input type="text" id="owner" name="owner" value={animalData?.owner || ''} onChange={handleInputChange} placeholder="Dono" className="hover:border rounded-lg w-full p-2 mt-1 opacity-background text-white" />
            </div>

            <div className="mb-4">
              <label className="text-white mb-1 block" htmlFor="phoneNumber">
                <div className="flex items-center">
                  <img src="/images/telefone-vector.png" alt="telefone-icon" className="w-4 h-4 mr-2" />
                  Telefone
                </div>
              </label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={animalData?.phoneNumber || ''} onChange={handleInputChange} placeholder="Telefone" className="hover:border rounded-lg w-full p-2 mt-1 opacity-background text-white" />
            </div>
          </div>

          {/* Segunda coluna */}
          <div className="flex flex-col ">
            <div className="mb-5 mt-1">
              <label className="text-white mb-1 block" htmlFor="animalType">
                <div className="flex items-center mb-2">
                  <img src="/images/raca-vector.png" alt="tipo-icon" className="w-4 h-4 mr-2" />
                  Tipo
                </div>
              </label>
              <div className="flex gap-2 w-full">
              <button
                 className={`w-6/12 border rounded-md p-2 ${animalData?.animalType === 'dog' ? 'bg-white text-indigo-950' : 'bg-transparent hover:bg-indigo-600 hover:border-none text-white'}`}
                 onClick={() => handleInputChange({ target: { name: 'animalType', value: 'dog' } } as React.ChangeEvent<HTMLInputElement>)}
              >
                 Dog
              </button>
              <button
                 className={`w-6/12 border rounded-md p-2 ${animalData?.animalType === 'cat' ? 'bg-white text-indigo-950' : 'bg-transparent hover:bg-indigo-600 hover:border-none text-white'}`}
                 onClick={() => handleInputChange({ target: { name: 'animalType', value: 'cat' } } as React.ChangeEvent<HTMLInputElement>)}
              >
                  Cat
              </button>
              </div>
            </div>

            <div className="">
              <label className="text-white mb-0 block" htmlFor="breed">
                <div className="flex items-center">
                  <img src="/images/raca-vector.png" alt="raca-icon" className="w-4 h-4 mr-2" />
                  Raça
                </div>
              </label>
              <input type="text" id="breed" name="breed" value={animalData?.breed || ''} onChange={handleInputChange} placeholder="Raça" className="hover:border rounded-lg w-full p-2 mt-1 opacity-background text-white" />
            </div>

            <div className="mb-4 mt-4">
              <label className="text-white mb-1 block" htmlFor="birthDate">
                <div className="flex items-center">
                  <img src="/images/idade-vector.png" alt="idade-icon" className="w-4 h-4 mr-2" />
                  Nascimento
                </div>
              </label>
              <input type="date" id="birthDate" name="birthDate" value={animalData?.birthDate || ''} onChange={handleInputChange} placeholder="Nascimento" className="border rounded-lg w-full p-2 mt-1 opacity-5:bg-color text-indigo-950" />
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end mt-6 lg:mt-12 w-full gap-2">
          <button onClick={onClose} className="bg-red-600 hover:bg-red-800 text-white p-2 mr-2 rounded-md items-center w-6/12 flex justify-center">
          <img src="/images/cancelar-vector.png" alt="Cancelar" className="w-4 h-4 mr-2" />
            Cancelar
          </button>
          <button onClick={handleCreate} className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md flex items-center w-6/12 justify-center">
          <img src="/images/add2-vector.png" alt="Cadastrar" className="w-4 h-4 mr-2" />
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCadastro;
