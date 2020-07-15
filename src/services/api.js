import axios from "axios";
import { TOKEN_KEY } from "../config/constants";

const dev_url = "http://localhost:3000/v1/";
const production_url =
  "http://ec2-3-17-206-79.us-east-2.compute.amazonaws.com/v1/";

export const baseURL = production_url;

const api = axios.create({
  baseURL,
  headers: {
    authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  },
});

export default api;
