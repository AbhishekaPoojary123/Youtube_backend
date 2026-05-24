import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { upload } from "../middlewares/multer.middleware.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req?.body;

    // check validation is any of the field is empty
    const isEmpty = [fullName, email, username, password]?.some((field) => {
        return field?.trim() === "";
    });
    if (isEmpty) {
        throw new ApiError(400, "All fields are required");
    }

    // check user is exists
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existedUser) {
        throw new ApiError(408, "User with username or email already exits");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    let coverImgLocalPath;
    if (
        req.files &&
        Array.isArray(req.files?.coverImg) &&
        req.files?.coverImg.length > 0
    ) {
        coverImgLocalPath = req.files?.coverImg[0]?.path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar Image is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImg = await uploadOnCloudinary(coverImgLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar is required");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImg: coverImg?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user?._id).select(
        "-password -refreshToken" // - means except password and refreshToken, rest all feilds are taken.
    );

    if (!createdUser) {
        throw new ApiError(500, "Somethig went wrong while registering");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdUser, "User registered successfully")
        );
});

export default registerUser;
