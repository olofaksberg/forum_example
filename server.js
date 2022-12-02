/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// router
import indexRouter from "./api/routers/indexRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("mongo connected");
  } catch (err) {
    process.exit();
  }
})();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static(path.resolve("./ses_1/public")));

app.use("/", indexRouter);

app.get("*", (req, res) =>
  res.sendFile("index.html", {
    root: "./ses_1/public",
  })
);

app.listen(PORT, () => {
  console.log("lyssnar på port " + PORT);
});
