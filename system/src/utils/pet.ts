import { app } from "@/lib/axios";

const handleAxiosError = (error) => {
  if (error.response) {
    console.error("Server error response:", error.response.data);
    throw new Error(error.response.data.message[0]);
  } else if (error.request) {
    console.error("No response received:", error.request);
    throw new Error("No response received from the server");
  } else {
    console.error("Unexpected error:", error.message);
    throw new Error("An unexpected error occurred");
  }
};

export const handlePetCreate = async (data, token) => {
  const getToken = `Bearer ` + token;

  try {
    const pet = await app.post("/pets", data, {
      headers: {
        Authorization: getToken
      }
    });

    return pet;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const handleGetAll = async (token, page = 1, pageSize = 10) => {
  const getToken = `Bearer ` + token;

  try {
    const pets = await app.get("pets", {
      headers: {
        Authorization: getToken
      },
      params: {
        page,
        pageSize
      }
    });

    console.log(pets.data);

    return pets.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const handlePut = async (data, token, id) => {
  const getToken = `Bearer ` + token;
  console.log(data, token, id);
  try {
    const pet = await app.put(`/pets/${id}`, data, {
      headers: {
        Authorization: getToken
      }
    });
    return pet;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const handleDelete = async (data, token, id) => {
  const getToken = `Bearer ` + token;
  try {
    const pet = await app.delete(`/pets/${id}`, {
      headers: {
        Authorization: getToken
      }
    });
    return true;
  } catch (error) {
    handleAxiosError(error);
  }
};
