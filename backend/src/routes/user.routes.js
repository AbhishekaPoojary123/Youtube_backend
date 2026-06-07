import { Router } from "express";
import {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logout,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImg,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImg", maxCount: 1 },
    ]),
    registerUser
);
router.route("/login").post(loginUser);

// secured route
router.route("/logout").post(verifyJWT, logout);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
    .route("/updateAvatar")
    .post(verifyJWT, upload.single("avatar"), updateUserAvatar);

router
    .route("/updateCoverImg")
    .post(verifyJWT, upload.single("coverImg"), updateUserCoverImg);
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/watch-history").post(verifyJWT, getWatchHistory);

export default router;
