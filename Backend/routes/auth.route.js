import express from "express";
import {
  login,
  logout,
  resetPassword,
  sendOTP,
  signup,
  verifyOTP,
} from "../controllers/auth.controller.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", isAuth, logout);
router.post("/sendOtp", sendOTP);
router.post("/verifyOtp", verifyOTP);
router.post("/resetPassword", resetPassword);

export default router;
