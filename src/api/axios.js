import axios from "axios";

const instance = axios.create({
  baseURL: "https://alura-flix-back.vercel.app/",
  withCredentials : true
});

export default instance;

