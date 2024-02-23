'use client'

import Cardpet from "@/components/Cardpet";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { getAllPet, deletePet, createPet, fetchPetData, updatePet } from "@/services/apiService"
import Modal from "@/components/Modal";
import Modalcontent from "@/components/Modalcontent";

export default function Home() {

  const [modalisOpen, setModalIsOpen] = useState(false);
  const [EditIsOpen, setEditIsOpen] = useState(false)
  const [addIsOpen, setAddisOpen] = useState(false)
  const [removeIsOpen, setRemoveIsOpen] = useState(false)



  type Pet = {
    "id": number,
    "nome_sobrenome": string,
    "animal": "Cachorro" | "Gato",
    "dono": string,
    "raca": string,
    "telefone": string,
    "nascimento": string
  }

  // Controle de Api

  const [pets, setPets] = useState<Pet[]>([]);

  // Função para carregar os pets ao montar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Chama a função para buscar todos os pets
        const pets = await getAllPet();
        setPets(pets);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }
    fetchData();
  }, []); // Executa apenas uma vez, ao montar o componente

  // Função para lidar com a criação de um novo pet
  const handleCreatePet = async (data: {
    "nome_sobrenome": string,
    "animal": "Cachorro" | "Gato",
    "dono": string,
    "raca": string,
    "telefone": string,
    "nascimento": string
  }) => {
    try {
      // Chama a função para criar um novo pet
      await createPet(data);
    } catch (error) {
      console.error('Error creating pet:', error);
    }
  };

  const getPetbyId = async (id: number) => {
    try {
      // Chama a função para criar um novo pet
      await fetchPetData(id)
    } catch (error) {
      console.error('Error fetching pet:', error);
    }
  };

  // Função para lidar com a atualização de um pet existente
  const handleUpdatePet = async (petId: number, data: string) => {
    try {
      // Chama a função para atualizar um pet existente
      await updatePet(petId, data); // Supondo que você precisa passar os novos dados do pet como argumento
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  // Função para lidar com a exclusão de um pet
  const handleDeletePet = async (petId: string) => {
    try {
      // Chama a função para excluir um pet
      await deletePet(petId);
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };


  // Controle da aba modal
  const openModal = (openModalContent: Function) => {
    openModalContent()
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setAddisOpen(false)
    setRemoveIsOpen(false)
    setEditIsOpen(false)
  };


  // Funções boolean para definir qual modal está aberto
  const openEdit = () => {
    setEditIsOpen(true)
  }
  const openAdd = () => {
    setAddisOpen(true)
  }
  const openRemove = () => {
    setRemoveIsOpen(true)
  }

  // Funções de controle de dados no banco de dados
  const removePet = () => {
    //handleDeletePet(id)
    closeModal()
  }
  const savePet = () => {
    //handleUpdatePet(id, data)
    closeModal()
  }
  const addPet = (data: {
    "nome_sobrenome": string,
    "animal": "Cachorro" | "Gato",
    "dono": string,
    "raca": string,
    "telefone": string,
    "nascimento": string
  }) => {
    handleCreatePet(data)
    closeModal()
  }

  const data_teste = {
    "id": 1,
    "nome_sobrenome": "cachorrinho",
    "animal": "Cachorro",
    "dono": "Cauã Vinicius",
    "raca": "Caramelo",
    "telefone": "(81)99680-5060",
    "nascimento": "2020-03-28T00:00:00.000Z"
  }

  return (
    <div className="absolute">
      <Logo />
      <Navbar openModal={openModal} buttonActionAdd={openAdd} buttonActionRemove={openRemove} buttonActionEdit={openEdit} />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-[1vh]">
        <Cardpet // cardpet ilustrativo 
          openModal={openModal}
          buttonActionAdd={openAdd}
          buttonActionRemove={openRemove}
          buttonActionEdit={openEdit}
          data={data_teste}
          modalisOpen={modalisOpen}
          EditIsOpen={EditIsOpen}
          addIsOpen={addIsOpen}
          removeIsOpen={removeIsOpen}
          closeModal={closeModal}
          addPet={addPet}
          editPet={savePet}
          removePet={removePet}
        />
        {pets.map(pet => (
          <div key={pet.id}>
            <Cardpet key={pet.id}
              openModal={openModal}
              buttonActionAdd={openAdd}
              buttonActionRemove={openRemove}
              buttonActionEdit={openEdit}
              data={pet}
              modalisOpen={modalisOpen}
              EditIsOpen={EditIsOpen}
              addIsOpen={addIsOpen}
              removeIsOpen={removeIsOpen}
              closeModal={closeModal}
              addPet={addPet}
              editPet={savePet}
              removePet={removePet}
            >
            </Cardpet>
          </div>
        ))
        }
      </div>

      <div></div>



      {addIsOpen ? (
        <Modal isOpen={modalisOpen}>
          <Modalcontent
            ModalTitle="Cadastrar"
            icon="./addIcon.svg"
            actionButton="Add"
            removePet={removePet}
            addPet={addPet}
            editPet={savePet}
            onClose={closeModal}
            data={{
              "id": 0,
              "nome_sobrenome": '',
              "animal": "Gato",
              "dono": "",
              "raca": "",
              "telefone": "",
              "nascimento": "",
            }}
          />
        </Modal>
      ) : null}


    </div>
  );
}