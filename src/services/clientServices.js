import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;


export const createClient = (client) => {
  return axios.post(`${base_url}/clients`, client);
};

export const getClients = () => {
  return axios.get(`${base_url}/clients`);
};

export const deleteClient = (id) => {
  return axios.delete(`${base_url}/clients/${id}`);
};

