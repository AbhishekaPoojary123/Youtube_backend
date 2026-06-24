import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

// router declaration
app.use("/api/v1/users", userRouter); // http://localhost:8000/api/v1/users/register
app.use("/api/v1/videos", videoRouter); // http://localhost:8000/api/v1/videos/uploadVideo

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Something went wrong",
        errors: err.errors || [],
    });
});

export { app };
