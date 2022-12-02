/** @format */

import { postModel } from "../models/post_model.js";

export const get_all_posts = async (req, res) => {
  try {
    const posts = await postModel.find({});

    return res.json({
      success: true,
      message: "Get all posts success",
      data: posts,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Get all posts error",
      data: null,
    });
  }
};

export const create_post = async (req, res) => {
  try {
    const { poster, text } = req.body;

    const newPost = await postModel.create({
      createdAt: new Date().toLocaleString("sv-SE"),
      poster: poster,
      text: text,
    });

    return res.json({
      success: true,
      message: "Create post success",
      data: newPost,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Create post error",
      data: null,
    });
  }
};

export const delete_all_posts = async (req, res) => {
  try {
    const responseFromDB = await postModel.deleteMany({});

    return res.json({
      success: true,
      message: "Delete all posts success",
      data: responseFromDB.deletedCount,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Delete all posts error",
      data: null,
    });
  }
};
