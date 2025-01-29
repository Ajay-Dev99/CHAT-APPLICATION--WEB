import axiosInstance from "../axios/axiosInstance"

export const userRegisterApi = (data) => {
    return axiosInstance.post("/user/user-register", data)
}
export const userLoginApi = (data) => {
    return axiosInstance.post("/user/login", data)
}
export const userCheckUserApi = () => {
    return axiosInstance.get("/user/check-user")
}
export const userLogoutApi = () => {
    return axiosInstance.post("/user/user-logout")
}
export const userListingApi = () => {
    return axiosInstance.get("/user/users-list")
}