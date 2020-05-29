import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;


export const createHotel = (hotel) => {
  return axios.post(`${base_url}/hotels`, hotel);
};

export const getHotels = () => {
  return axios.get(`${base_url}/hotels`);
};

export const deleteHotel = (id) => {
  return axios.delete(`${base_url}/hotels/${id}`);
};

export const updateHotel = (id) => {
  return axios.patch(`${base_url}/hotels/${id}`);
};