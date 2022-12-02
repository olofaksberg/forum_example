/** @format */

import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  createdAt: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const postModel = mongoose.model("Post", postSchema);
