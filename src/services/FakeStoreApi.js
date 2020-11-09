import axios from "axios";

const uri = "https://fakestoreapi.com";

const fakestoreapi = axios.create({
  baseURL: uri,
});

export default fakestoreapi;
