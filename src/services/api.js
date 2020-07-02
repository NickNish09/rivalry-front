import axios from "axios";

const dev_url = "http://localhost:3000/";
const production_url = "http://rivalry-api.herokuapp.com/";

export const baseURL = dev_url;

const api = axios.create({
  baseURL,
});
