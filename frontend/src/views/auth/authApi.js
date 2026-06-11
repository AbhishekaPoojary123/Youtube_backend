import { api } from "../../services/api";

export const registerUser = async (formDate) => {
    const response = await api.post("/users/register", formDate);
    return response?.data;
};

export const checkUsername = async (username) => {
    const response = await api.get(`/users/check-username/${username}`);
    return response.data;
};
