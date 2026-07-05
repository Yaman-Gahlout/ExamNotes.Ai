import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import HistoryHeader from "../components/History/HistoryHeader";
import Searchbar from "../components/History/Searchbar";
import HistoryCard from "../components/History/HistoryCard";
import EmptyState from "../components/History/EmptyState";
import DeleteModal from "../components/History/DeleteModal";
import Navbar from "../components/Navbar";
import useGetMyNotes from "../hooks/useGetMyNotes";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { base_url } from "../App";
import axios from "axios";
import { setAllNotesData } from "../redux/slices/user.slice";

export default function History() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const { loading } = useGetMyNotes();

  const notes = useSelector((state) => state.user.allNotes);
  console.log("Notes in history : ", notes);
  const dispatch = useDispatch();

  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const filteredNotes = useMemo(() => {
    const value = search.toLowerCase();

    return notes?.filter((item) =>
      item.content?.title?.toLowerCase().includes(value),
    );
  }, [notes, search]);

  const openDeleteModal = (note) => {
    console.log("note in modal : ", note);
    setSelectedNote(note);
    setDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      console.log("selected notes to delete : ", selectedNote);
      const response = await axios.delete(
        `${base_url}/notes/${selectedNote._id}`,
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message);

      // Close modal
      setDeleteModal(false);
      setSelectedNote(null);

      // Refresh notes (choose one approach below)

      // Option 1: Fetch notes again
      // useGetMyNotes();

      // Option 2 (recommended): Remove from Redux locally
      const filteredNotes = notes.filter(
        (note) => note._id !== selectedNote._id,
      );
      dispatch(setAllNotesData(filteredNotes));
    } catch (err) {
      console.log(err);

      toast.error(err.response?.data?.message || "Error while deleting note");
    }
  };

  return (
    <div className="relative min-h-screen  bg-[#020617] text-white">
      {/* Animated Background */}

      <Navbar isUpload={false} />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            -top-20
            -left-20
            h-96
            w-96
            rounded-full
            bg-purple-600/20
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-cyan-500/20
            blur-[150px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Hero */}
        <HistoryHeader totalNotes={notes?.length} />

        {/* Search */}
        <div className="mt-8">
          <Searchbar
            search={search}
            setSearch={setSearch}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Grid */}
        <div className="mt-10">
          {filteredNotes?.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6">
              {filteredNotes?.map((note) => (
                <HistoryCard
                  key={note.id}
                  Note={note}
                  onDelete={() => openDeleteModal(note)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Delete Modal */}

      <DeleteModal
        isOpen={deleteModal}
        noteTitle={selectedNote?.content?.title}
        onClose={() => setDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
