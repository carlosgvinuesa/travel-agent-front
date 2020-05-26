import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const getUserbase = () => {
  return axios.get(`${base_url}/users`);
};

export const searchUser = (query) => {
  return axios.get(`${base_url}/users/search?${query}`);
};

export const deleteUser = (id) => {
  return axios.delete(`${base_url}/users/${id}`);
};