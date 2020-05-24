import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createExperience = (experience) => {
  return axios.post(`${base_url}/experiences`, experience);
};