import api from "./api";

export const getTrendingRivalries = () => {
  return api.get("/rivalries/trending");
};

export const getTopRivalries = () => {
  return api.get("/rivalries/top");
};

export const likeRivalry = (rivalryId) => {
  return api.post(`/rivalries/like/${rivalryId}`);
};

export const checkIfLiked = (rivalryId) => {
  return api.get(`/likes/hasLikedRivalry/${rivalryId}`);
};

export const getRivalStared = (rivalryId) => {
  return api.get(`/likes/rivalStared/${rivalryId}`);
};

export const getRivalriesByUser = () => {
  return api.get(`/rivalries/byUser`);
};

export const getRivalriesUserLiked = () => {
  return api.get(`/rivalries/userLiked`);
};
