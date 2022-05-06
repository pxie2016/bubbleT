import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8000"})
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${

            JSON.parse(localStorage.getItem("profile")).token
        }`
    }
    return req
})
export const logIn = (formData) => API.post("/users/login", formData)
export const signUp = (formData) => API.post("/users/signup", formData)
export const createShop = (shopData) => API.post("/shops/create", shopData)
export const getShopsByUser = (userId) => API.get(`/shops/get/userShops/${userId}`, userId)
export const deleteShop = (shopId) => API.delete(`/shops/get/${shopId}`, shopId)
export const updateShop = (updatedShop, shopId) => API.patch(`/shops/get/${shopId}`, updatedShop)
export const createReviewBox = (reviewBoxData, shopId) => API.patch(`/shops/get/${shopId}/updateReview`, reviewBoxData)