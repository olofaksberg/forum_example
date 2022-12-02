/** @format */

import bcrypt from "bcrypt";

import { userModel } from "../models/user_model.js";

export const create_user = async (req, res) => {
  try {
    const { name, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await userModel.create({
      name: name,
      password: hashedPassword,
    });

    const responseUserData = {
      _id: newUser._id,
      name: newUser.name,
    };

    return res.json({
      success: true,
      message: "Create user success",
      data: responseUserData,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Create user error",
      data: null,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await userModel.findOne({
      name: name,
    });

    const correctPassword = bcrypt.compareSync(password, user.password);

    if (correctPassword && user) {
      const responseUserData = {
        _id: user._id,
        name: user.name,
      };

      return res.json({
        success: true,
        message: "Login user success",
        data: responseUserData,
      });
    } else {
      return res.json({
        success: false,
        message: "Login user error",
        data: null,
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: "Login user error",
      data: null,
    });
  }
};

export const delete_all_users = async (req, res) => {
  try {
    const responseFromDB = await userModel.deleteMany({});

    return res.json({
      success: true,
      message: "Delete all users success",
      data: responseFromDB.deletedCount,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Delete all users error",
      data: null,
    });
  }
};
