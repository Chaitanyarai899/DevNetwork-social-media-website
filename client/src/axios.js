import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://devnetworkserver.onrender.com/api",
  withCredentials: true,
});
