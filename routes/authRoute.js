import express from "express";
import { registerController,loginController } from "../controllers/authController.js";
const router = express.Router();

////register user method post

router.post("/register",registerController);

router.post("/login",loginController);

export default router;
