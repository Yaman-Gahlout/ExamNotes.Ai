import pdf from "pdf-parse/lib/pdf-parse.js";
import fs from "fs";
import User from "../models/user.model.js";
import prompt from "../utils/prompt.js";
import { generateNotes } from "../services/gemini.service.js";
import Notes from "../models/notes.model.js";
import { jsonrepair } from "jsonrepair";

export const pdfUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const userId = req.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isCreditsAvailable) {
      return res.status(400).json({
        success: false,
        message: "You don't have enough credits to generate notes.",
      });
    }

    const buffer = fs.readFileSync(req.file.path);

    const result = await pdf(buffer);

    //const promptForCleanText = `You are creating notes for students preparing for exams.

    // Below is extracted text from a PDF. The text may contain OCR errors,
    // broken sentences, page numbers, repeated headers/footers, or formatting issues.

    // Tasks:
    // 1. Clean and reconstruct the text where possible.
    // 2. Ignore irrelevant or duplicate content.
    // 3. Preserve technical accuracy.
    // 4. Return in the form of text not JSON.

    // Extracted text:
    // ${result.text}`;

    //     const cleanText = await generateNotes(promptForCleanText);
    //     console.log("clean text : ", cleanText);

    const finalPrompt = `
        ${prompt}

        STUDY MATERIAL:

        ${result.text}

        Generate the notes strictly according to the JSON schema above.`;

    let notes = await generateNotes(finalPrompt);

    console.log("notes : ", notes);

    const cleanJson = notes
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const repaired = jsonrepair(cleanJson);

    notes = JSON.parse(repaired);

    console.log("Notes : ", notes);

    const newNotes = await Notes.create({
      user: userId,
      content: notes,
    });

    user.credits -= 10;
    if (user.credits < 10) {
      user.isCreditsAvailable = false;
    }

    user.notes.push(newNotes._id);

    await user.save();

    // Optional: delete the uploaded file after parsing
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    return res.status(200).json({
      success: true,
      notes: newNotes,
    });
  } catch (error) {
    console.error("error while generating notes : ", error);
    if (error.status === 503) {
      return res.status(503).json({
        success: false,
        message:
          "The AI service is currently busy. Please try again in a few moments.",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Failed to generate notes",
      error: error.message,
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(404).json({
        message: "userId not found",
      });
    }
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", err: err.message });
    }

    return res.status(200).json({ message: "success", user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", err: err.message });
  }
};
