import api from "./api";

export const getAllSearch = (query) => {
  return api.get(`/search?q=${query}`);
};
