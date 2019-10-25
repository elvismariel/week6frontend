import axios from "axios";

const api = axios.create({
    baseURL: "https://week6backend.herokuapp.com",
});

export default api;