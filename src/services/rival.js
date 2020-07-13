import api from "./api";

export const getRivalOptions = (params) => {
  return api.get(`/rivals/search?name=${params}`);
};
