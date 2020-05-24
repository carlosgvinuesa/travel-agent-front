import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createHotel = (hotel) => {
  return axios.post(`${base_url}/hotels`, hotel);
};