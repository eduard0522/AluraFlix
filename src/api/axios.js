import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9876/",
  withCredentials : true
});

export default instance;

