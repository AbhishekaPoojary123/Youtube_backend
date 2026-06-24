import { Video } from "../models/video.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const uploadVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    const videoFile = req.files?.videoFile?.[0];
    const thumbnail = req.files?.thumbnail?.[0];

    const isPublished = req.body.isPublished === "true";

    if (!title?.trim()) {
        throw new ApiError(400, "Title is required");
    }

    if (!videoFile) {
        throw new ApiError(400, "Video file is required");
    }

    if (!thumbnail) {
        throw new ApiError(400, "Thumbnail is required");
    }

    const uploadedVideo = await uploadOnCloudinary(videoFile.path);

    if (!uploadedVideo?.secure_url) {
        throw new ApiError(500, "Failed to upload video");
    }

    const uploadedThumbnail = await uploadOnCloudinary(thumbnail.path);

    if (!uploadedThumbnail?.secure_url) {
        throw new ApiError(500, "Failed to upload thumbnail");
    }

    const video = await Video.create({
        title: title.trim(),
        description: description?.trim() || "",
        isPublished,

        videoFile: uploadedVideo.secure_url,
        thumbnail: uploadedThumbnail.secure_url,

        duration: uploadedVideo.duration || 0,

        owner: req.user._id,
    });

    const createdVideo = await Video.findById(video._id).populate(
        "owner",
        "username fullName avatar"
    );

    return res
        .status(201)
        .json(
            new ApiResponse(201, createdVideo, "Video uploaded successfully")
        );
});

export { uploadVideo };
