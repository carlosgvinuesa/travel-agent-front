import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createClient = (client) => {
  return axios.post(`${base_url}/clients`, client);
};

export const searchClient = (query) => {
  return axios.get(`${base_url}/clients/search`, query);
};