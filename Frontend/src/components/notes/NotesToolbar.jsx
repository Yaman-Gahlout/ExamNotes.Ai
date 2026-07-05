import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload, FaCopy, FaShareAlt, FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import { generateNotesPDF } from "./HeroSection";

export default function NotesToolbar({ notes }) {
  const [progress, setProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  // Scroll Progress
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;

      const current = (window.scrollY / total) * 100;

      setProgress(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Copy Summary
  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(notes?.summary || "");

      toast.success("Summary copied!");
    } catch {
      toast.error("Failed to copy.");
    }
  };

  // Share
  const shareNotes = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: notes?.title,
          text: notes?.overview,
        });
      } else {
        toast("Share not supported.");
      }
    } catch {}
  };

  return (
    <>
      {/* Reading Progress */}

      <motion.div
        className="
          fixed
          top-0
          left-0
          h-1
          z-[999]
          bg-gradient-to-r
          from-purple-500
          to-cyan-400
        "
        animate={{
          width: `${progress}%`,
        }}
      />

      {/* Floating Toolbar */}

      <div
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          flex-col
          gap-3
        "
      >
        {/* Download */}

        <button
          onClick={() => generateNotesPDF(notes)}
          className="
            h-12
            w-12
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-cyan-500
            shadow-lg
            flex
            items-center
            justify-center
            cursor-pointer
          "
          title="Download PDF"
        >
          <FaDownload />
        </button>

        {/* Copy */}

        <button
          onClick={copySummary}
          className="
            h-12
            w-12
            rounded-full
            bg-slate-900
            border
            border-white/10
            flex
            items-center
            justify-center
            cursor-pointer

          "
          title="Copy Summary"
        >
          <FaCopy />
        </button>

        {/* Share */}

        {/* <button
          onClick={shareNotes}
          className="
            h-12
            w-12
            rounded-full
            bg-slate-900
            border
            border-white/10
            flex
            items-center
            justify-center
          "
          title="Share"
        >
          <FaShareAlt />
        </button> */}

        {/* Bookmark */}

        {/* <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`
            h-12
            w-12
            rounded-full
            border
            flex
            items-center
            justify-center
            ${
              bookmarked
                ? "bg-yellow-500 text-black border-yellow-400"
                : "bg-slate-900 border-white/10"
            }
          `}
          title="Bookmark"
        >
          <FaBookmark />
        </button> */}
      </div>
    </>
  );
}
