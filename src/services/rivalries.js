import api from "./api";

export const getTrendingRivalries = () => {
  return api.get("/rivalries/trending");
};

export const getTopRivalries = () => {
  return api.get("/rivalries/top");
};
