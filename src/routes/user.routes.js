import { Router } from "express";
import {
    loginUser,
    logout,
    refreshAccessToken,
    registerUser,
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

router
    .route("/updateAvatar")
    .post(verifyJWT, upload.single("avatar"), updateUserAvatar);

router
    .route("/updateCoverImg")
    .post(verifyJWT, upload.single("coverImg"), updateUserCoverImg);

// secured route
router.route("/logout").post(verifyJWT, logout);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
