import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const createInquiry = (inquiry) => {
  return axios.post(`${base_url}/inquiries`, inquiry);
};