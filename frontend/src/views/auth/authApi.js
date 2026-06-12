import { api } from "../../services/api";

// regiter
export const registerUser = async (formDate) => {
    const response = await api.post("/users/register", formDate);
    return response?.data;
};

export const checkUsername = async (username) => {
    const response = await api.get(`/users/check-username/${username}`);
    return response.data;
};

// login
export const loginUser = async (formData) => {
    const response = await api.post("/users/login", formData);
    return response.data;
};
