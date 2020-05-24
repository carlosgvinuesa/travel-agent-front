import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;


export const createTransport = (transport) => {
  return axios.post(`${base_url}/transports`, transport);
  
export const getTransports = () => {
  return axios.get(`${base_url}/transports`);
};