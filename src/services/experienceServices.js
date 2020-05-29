import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;


export const createExperience = (experience) => {
  return axios.post(`${base_url}/experiences`, experience);
};

export const getExperiences = () => {
  return axios.get(`${base_url}/experiences`);
};

export const deleteExperience = (id) => {
  return axios.delete(`${base_url}/experiences/${id}`);
};

export const updateExperience = (params) => {
  return axios.patch(`${base_url}/experiences/${params.id}`, params.data);
};
