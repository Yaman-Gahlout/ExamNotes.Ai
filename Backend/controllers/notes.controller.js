import Notes from "../models/notes.model.js";
import User from "../models/user.model.js";

export const getNotes = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    const notes = await Notes.find({ user: userId }).sort({ createdAt: -1 });
    if (!notes) {
      return res.status(204).json({ message: "Notes not found" });
    }
    return res.status(200).json({ notes });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", err: err.message });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { id: notesId } = req.params;

    if (!notesId) {
      return res.status(400).json({
        success: false,
        message: "Note ID is required",
      });
    }

    const note = await Notes.findById(notesId);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Check ownership (if Notes schema has a user field)
    if (note.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to delete this note",
      });
    }

    await Notes.findByIdAndDelete(notesId);

    await User.findByIdAndUpdate(userId, {
      $pull: {
        notes: notesId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
