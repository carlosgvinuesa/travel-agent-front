import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createRestaurant = (restaurant) => {
  return axios.post(`${base_url}/restaurants`, restaurant);
};