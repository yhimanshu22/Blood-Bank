import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = process.env.REACT_APP_BASEURL ;
} else {
  baseURL = process.env.REACT_APP_PROD_BASEURL ;
}


const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
