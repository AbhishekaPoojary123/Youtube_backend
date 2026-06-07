import dotenv from "dotenv";
import connetcDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connetcDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`app is listening on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.log("mongoDB connection failed", error);
    });
