  // Ernandy Virginio Lucena de sousa
  // ernandy2017@gmail.com 
  // 81 994800881 

  import CardAnimal from '../components/CardAnimal';
  import AnimalInfoCard from '../components/AnimalInfoCard';
  import ModalCadastro from '../components/ModalCadastro';
  import ModalEdicao from '../components/ModalEdicao';
  import React, { useState, useEffect } from 'react';


  interface AnimalData {
    id: number;
    name: string;
    owner: string;
    phoneNumber: string;
    animalType: string;
    breed: string;
    birthDate: string;
  }

  const ITEMS_PER_PAGE = 17;

  const Home: React.FC = () => {  
    const [animalsData, setAnimalsData] = useState<AnimalData[]>(
      [

      ]
      
    );

    const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingAnimal, setEditingAnimal] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const [reRender, setReRender] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/animals')
      .then(response => response.json())
      .then(data => setAnimalsData(data))
      .catch(error => console.error('Erro ao obter animais:', error));
  }, [reRender]);
    
    const handleAnimalClick = (id: number) => {
      setSelectedAnimal(selectedAnimal === id ? null : id);
      setEditingAnimal(null);
    };

    const handleDelete = async (id: number) => {
      try {
        const response = await fetch(`http://localhost:4000/animals/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setReRender(prev => !prev); // Atualiza o estado para re-renderizar o componente
        } else {
          console.error('Erro ao deletar animal:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao deletar animal:', error);
      }
    };

    const handleEdit = (id: number) => {
      setEditingAnimal(id);
    };

    const handleSaveEdit = async (updatedAnimalData: AnimalData) => {
      try {
        if (editingAnimal !== null) {
          const response = await fetch(`http://localhost:4000/animals/${String(editingAnimal)}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAnimalData),
          });
    
          if (response.ok) {
            const updatedAnimal = await response.json();
            setAnimalsData((prevAnimals) =>
              prevAnimals.map((animal) => (String(animal.id) === String(editingAnimal) ? updatedAnimal : animal))
            );
            setEditingAnimal(null);
          } else {
            console.error('Erro ao editar animal:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Erro ao editar animal:', error);
      }
    };
    
    const handleCreate = async (animalData: AnimalData): Promise<void> => {
    try {
      const response = await fetch('http://localhost:4000/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animalData),
      });

      if (response.ok) {
        const newAnimal = await response.json();
        setAnimalsData(prevAnimals => [...prevAnimals, newAnimal]);
        setModalVisible(false); 
      } else {
        console.error('Erro ao cadastrar animal:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar animal:', error);
    }
  };
  
    const filteredAnimals = animalsData.filter((animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentAnimals = filteredAnimals.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="p-8">
        <div className="relative mb-10 flex justify-between items-center">
          <div className="relative search-bar">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <img src="/images/Vector.png" alt="search-icon" style={{ width: '16px', height: '16px' }} />
            </div>
            <input
              type="text"
              placeholder=" "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 pl-8 pr-16 border border-gray-500 rounded-xl lg:w-[800px] md:w-[500px] w-56 lg:text-lg text-xs bg-transparent text-white placeholder-white xxs-placeh"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button
                className="bg-white bg-opacity-10 p-2 px-4 rounded-lg text-white text-xs lg:text-base sm:text-xs xxs-search-bar"
                onClick={() => setSearchTerm('')}
              >
                Pesquisar
              </button>
            </div>
          </div>
          <button
            onClick={() => setModalVisible(true)}
            className="bg-indigo-500 gap-1 text-white hover:bg-indigo-700 transition duration-300 ease-in-out p-2 rounded-lg lg:w-32 lg:h-10 w-22 h-9 text-xs flex items-center justify-center xxs-cadastrar-button mb-1"
          >
            <img src="/images/add-vector.png" alt="add-icon" style={{ width: '19px', height: '19px' }} />
            Cadastrar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentAnimals.map((animal) => (
            <div key={animal.id} className="mb-4">
              <CardAnimal
                name={animal.name}
                owner={animal.owner}
                animalType={animal.animalType}
                onAnimalClick={() => handleAnimalClick(animal.id)}
                isInfoCardOpen={selectedAnimal === animal.id}
              />
              
              {selectedAnimal === animal.id && (
               <AnimalInfoCard
               id={animal.id as number}
               phoneNumber={animal.phoneNumber}
               owner={animal.owner}
               breed={animal.breed}
               birthDate={animal.birthDate}
               onDelete={() => handleDelete(animal.id as number)}
               onEdit={() => handleEdit(animal.id as number)}
                />
               )}

              {editingAnimal === animal.id && (
                <ModalEdicao
                  isOpen={true}
                  onClose={() => setEditingAnimal(null)}
                  onSave={(updatedAnimalData) => handleSaveEdit(updatedAnimalData)}
                  animalData={animal}
                />
              )}
            </div>
          ))}
        </div>

        {filteredAnimals.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(filteredAnimals.length / ITEMS_PER_PAGE) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-2 px-4 py-2 rounded-lg ${
                  currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
         
         <ModalCadastro
           isOpen={modalVisible}
           onClose={() => setModalVisible(false)}
          onCreate={(animalData: AnimalData) => handleCreate(animalData)}
          />



      </div>
    );
  };

  export default Home;
