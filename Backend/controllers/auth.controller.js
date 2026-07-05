import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmail from "../services/email.service.js";
import OTP from "../models/otp.model.js";
import generateOTP from "../utils/generateOTP.js";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({ message: "Login successful", user, token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json("Logged out successfully");
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email) {
    return res.status(404).json({ message: "email is undefined" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "account with this email doesn't exists" });
  }

  const response = await OTP.findOne({ userId: user._id });

  if (response.otp !== otp) {
    return res.status(400).json({ message: "Invalid Verification code" });
  }
  return res
    .status(200)
    .json({ message: "Verification code verified successfully" });
};

export const sendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(404).json({ message: "email is undefined" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "account with this email doesn't exists" });
  }

  const otp = generateOTP();

  const response = await OTP.create({
    userId: user._id,
    otp,
  });

  console.log(response);

  await sendEmail(email, otp);

  return res
    .status(200)
    .json({ message: "Verification code send successfully" });
};

export const resetPassword = async (req, res) => {
  const { newPassword, confirmPassword, email } = req.body;

  if (!email || !newPassword || !confirmPassword) {
    return res.status(404).json({ message: "Missing Credentials" });
  }

  const hashPassword = await bcrypt.hash(newPassword, 10);
  const response = await User.findOneAndUpdate(
    { email },
    { password: hashPassword },
  );

  console.log(response);

  return res
    .status(200)
    .json({ message: "Password has been reset successfully" });
};
