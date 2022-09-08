import axios from "axios"

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const postsAPI = {
    getUsers() {
        return instance.get(`users`)
            .then(response => {
                return response.data;
            })
    },
    getPhotos() {
        return instance.get(`photos`)
            .then(response => {
                return response.data;
            })
    },
    getPosts() {
        return instance.get(`posts`)
            .then(response => {
                return response.data;
            })
    },
}