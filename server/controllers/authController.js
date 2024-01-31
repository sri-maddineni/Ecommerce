import express from "express";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import Jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name) {
      return res.send({ error: "Name is required" });
    }

    if (!email) {
      return res.send({ error: "email is required" });
    }

    if (!password) {
      return res.send({ error: "password is required" });
    }

    if (!phone) {
      return res.send({ error: "phone no is required" });
    }

    if (!address) {
      return res.send({ error: "address is required" });
    }

    //existing user checking

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status.send({
        success: true,
        message: "Already registered please login",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//login controller

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      console.log("user not found");
      res.status(404).send({
        message: "User not found!",
        success: false,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }

    //token

    const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login success",
      user: {
        name: user.name,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send({
    message: "hello world",
  });
  console.log("protected route");
};
