import axios from "axios"

let baseUrl = "http://localhost:8080/users";

export const httpAddUser = (user) => {
    return axios.post(baseUrl, user);
}
export const httpLoginUser = (user) => {
    return axios.post(baseUrl+"/login", user);
}

