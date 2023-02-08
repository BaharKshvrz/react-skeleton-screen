import axios from "axios";

const usersApi = axios.create({
    baseURL:  "http://localhost:3500"
});

export const usersUrlEndpoint = "/users";

export const getUsers = async () => {
    const response = await usersApi.get(usersUrlEndpoint);
    return response.data;
}

export const getUserById = async (url, userId) => {
    const response = await usersApi.get(`${url}/${userId}`);
    return response.data;
}
