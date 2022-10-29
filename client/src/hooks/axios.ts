import Axios from "axios";

const url = Axios.create({
  baseURL: "http://localhost:3000",
});
export default url;
