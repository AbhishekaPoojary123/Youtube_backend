import { api } from "../../services/api";

// channelProfile
export const updateUserProfile = async (formData) => {
    const response = await api.post("/users/updateUserProfile", formData);
    return response?.data;
};

// channelDashboard
export const uploadVideo = async (formData) => {
    const response = await api.post("/videos/uploadVideo", formData);
    return response?.data;
};
