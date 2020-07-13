import api from "./api";
import { openNotificationWithIcon } from "../helpers/notifications";

export const isAuthenticated = () => true;

export const sendLoginRequest = (values) => {
  const { email, password } = values;
  return api.post("auth/authenticate", {
    email,
    password,
  });
};
