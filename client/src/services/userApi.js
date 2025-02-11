import axiosInstance from "../axios/axiosInstance"

export const userRegisterApi = (data) => {
    console.log(data, "Data");


    // Log FormData contents
    for (let pair of data) {
        console.log(pair, "ind api");
    }


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