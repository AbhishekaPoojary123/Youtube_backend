import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { uploadVideo } from "../controllers/video.controller.js";

const router = Router();

router.route("/uploadVideo").post(verifyJWT, uploadVideo);

export default router;
