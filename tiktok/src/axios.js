import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mern-ftasneem.herokuapp.com/",

});

export default instance;