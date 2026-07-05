// src/pages/NotesPage.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

// Upcoming Components (we'll create these in later parts)
import Sidebar from "../components/notes/Sidebar";
import HeroSection from "../components/notes/HeroSection";
import OverviewSection from "../components/notes/OverviewSection";
import DetailedNotesSection from "../components/notes/DetailedNotesSection";
import PracticeSection from "../components/notes/PracticeSection";
import NotesToolbar from "../components/notes/NotesToolbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const notes = useSelector((state) => state.user.notes);
  const navigate = useNavigate();

  useEffect(() => {
    if (!notes || notes?.length === 0) {
      navigate("/history");
      return;
    }
  }, []);

  console.log(notes);

  return (
    <div className="relative min-h-screen  bg-[#020617] text-white">
      {/* ================= Animated Background ================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="
            absolute
            -top-24
            -left-24
            h-96
            w-96
            rounded-full
            bg-purple-600/20
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-cyan-500/20
            blur-[140px]
          "
        />
      </div>

      {/* ================= Mobile Header ================= */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            ExamNotes.Ai
          </h1>

          <button
            onClick={() => setSidebarOpen(true)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
            "
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ================= Layout ================= */}

      <div className="mx-auto flex max-w-[1600px]">
        {/* Sidebar */}

        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} notes={notes} />

        {/* Main */}
        <div id="notes-root" className="flex-1 px-4 py-6 sm:px-6 lg:px-10">
          <main className="">
            {/* Hero */}

            <HeroSection notes={notes} />

            {/* Overview */}

            <section id="overview" className="mt-10">
              <OverviewSection notes={notes} />
            </section>

            {/* Detailed Notes */}

            <section id="notes" className="mt-10">
              <DetailedNotesSection notes={notes} />
            </section>

            {/* MCQs */}

            <section id="mcqs" className="mt-10">
              <PracticeSection notes={notes} />
            </section>
          </main>
        </div>

        <NotesToolbar notes={notes} />
      </div>
    </div>
  );
}
