import axios from "axios";

function Api() {
  return axios.create({
    baseURL: "http://localhost:3001/",
  });
}

export default Api;
