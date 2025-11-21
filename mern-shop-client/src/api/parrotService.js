//כאן נכתוב את הקריאות לשרת בנושא תוכים

import axios from "axios"

let baseUrl = "http://localhost:8080/products";
//זה נוח שזה בעמוד אחד מסודר
export const httpGetAllParrots = (page) => {
    return axios.get(baseUrl + "?limit=8&page=" + page);
}

export const httpGetTotalPagesCount = () => {
    return axios.get(baseUrl + "/total?limit=8");
}
export const httpAddParrot = (parrot) => {
    return axios.post(baseUrl, parrot);
}
export const httpUpdateParrot = (parrot, id) => {
    return axios.put(`${baseUrl}/${id}`, parrot);
}
export const httpDeleteParrot = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
