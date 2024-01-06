import "express-async-errors";

import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cloudinary from "cloudinary";

import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

import cookieParser from "cookie-parser";

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(mongoSanitize());

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use("*", (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: "Error ", msg: "Route not defined" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

try {
  const DB = process.env.DATABASE_URL.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );

  mongoose.connect(DB).then(() => console.log("DB connection successfull!"));

  app.listen(port, () => {
    console.log(`server running at port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
