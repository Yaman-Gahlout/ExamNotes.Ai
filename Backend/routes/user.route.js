import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser, pdfUpload } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/", isAuth, getCurrentUser);
router.post("/upload", upload.single("pdf"), isAuth, pdfUpload);

export default router;
