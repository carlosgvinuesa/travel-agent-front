import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const login = (credentials) => {
  return axios.post(`${base_url}/login`, credentials);
};

export const signup = (credentials) => {
  return axios.post(`${base_url}/signup`, credentials);
};

export const logout = () => {
  return axios.post(`${base_url}/logout`);
};