import api from "./api";

export const getRivalOptions = (params) => {
  return api.get(`/rivals/search?name=${params}`);
};

export const postStarRival = (rivalId, rivalryId) => {
  return api.post(`/likes/starRival`, { rivalId, rivalryId });
};

export const getRival = (rivalId) => {
  return api.get(`/rivals/${rivalId}`);
};
