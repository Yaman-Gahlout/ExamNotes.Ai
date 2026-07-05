import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { deleteNotes, getNotes } from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", isAuth, getNotes);
router.delete("/:id", isAuth, deleteNotes);

export default router;
