import axios from "axios";

const dev_url = "http://localhost:3000/v1/";
const production_url = "http://rivalry-api.herokuapp.com/v1/";

export const baseURL = dev_url;

const api = axios.create({
  baseURL,
});

export default api;
