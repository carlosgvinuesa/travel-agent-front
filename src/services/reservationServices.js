import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;


export const createReservation = (reservation) => {
  return axios.post(`${base_url}/reservations`, reservation);
};

export const getReservations = () => {
  return axios.get(`${base_url}/reservations`);
};

