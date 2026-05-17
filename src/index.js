import dotenv from "dotenv";
import connetcDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connetcDB();
