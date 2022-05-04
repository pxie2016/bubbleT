import axios from "axios";
const API = axios.create({baseURL:"http://localhost:8000"})
export const logIn = (formData)=>API.post("/users/login", formData)
export const signUp = (formData)=>API.post("/users/signup", formData)
export const createShop = (shopData)=>API.post("/shops/create", shopData)
