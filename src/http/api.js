import axios from "axios";

const api = axios.create({
  baseURL: "http://laravelvue-be.io/",
});

export default api;
