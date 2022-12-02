/** @format */

import express from "express";

import { create_user, login, delete_all_users } from "../controllers/user_controller.js";

import { create_post, get_all_posts, delete_all_posts } from "../controllers/post_controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/create_user", create_user);
router.get("/delete_all_users", delete_all_users);

router.get("/get_all_posts", get_all_posts);
router.get("/delete_all_posts", delete_all_posts);
router.post("/create_post", create_post);


export default router;