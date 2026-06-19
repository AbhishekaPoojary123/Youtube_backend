import { api } from "../../services/api";

// channelProfile
export const updateUserProfile = async (formData) => {
    const response = await api.post("/users/updateUserProfile", formData);
    return response?.data;
};
