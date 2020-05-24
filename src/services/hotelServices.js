import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const getHotels = () => {
  return axios.get(`${base_url}/hotels`);
};

