import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://devnetworkserver.onrender.com/api",
  withCredentials: true,
});
