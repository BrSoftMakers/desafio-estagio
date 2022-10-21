import Api from "../config/server/config";

const CarService = {
  getAll: async () => {
    var data = null;
    await Api()
      .get("/cars")
      .then((response) => {
        data = response.data;
      });
    return data;
  },

  create: async (params) => {
    var data = null;
    await Api()
      .post("/cars", { body: params })
      .then((response) => {
        data = response.data;
      });
    return data;
  },

  update: async (params) => {
    var data = null;
    await Api()
      .post(`/cars/:${params.id}`, { body: params })
      .then((response) => {
        data = response.data;
      });
    return data;
  },
  delete: async (params) => {
    await Api().delete(`/cars/${params}`);
  },
};

export default CarService;
