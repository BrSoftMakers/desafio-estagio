import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:4000/api"
});


export const fetchPetData = async (userId: number) => {
  try {
    const response = await api.get(`/pets/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pet data:', error);
    throw error;
  }
};

export const updatePet = async (PetId: number, PetData: any) => {
  try {
    const response = await api.put(`/pets/${PetId}`, PetData);
    return response.data;
  } catch (error) {
    console.error('Error updating pet profile:', error);
    throw error;
  }
};

export const createPet = async (PetData: any) => {
  try {
    const response = await api.post(`/pets`, PetData);
    return response.data;
  } catch (error) {
    console.error('Error creating pet :', error);
    throw error;
  }
};

export const getAllPet = async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error) {
    console.error('Error getting pets info :', error);
    throw error;
  }
};

export const deletePet = async (PetId: string) => {
  try {
    const response = await api.delete(`/pets/${PetId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting pet profile:', error);
    throw error;
  }
};