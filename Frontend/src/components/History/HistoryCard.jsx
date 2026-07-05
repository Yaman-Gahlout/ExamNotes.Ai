import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookmark,
  FaRegBookmark,
  FaTrash,
  FaClock,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setNotesData } from "../../redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function HistoryCard({ Note, onDelete }) {
  const navigate = useNavigate();
  const note = Note.content;

  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setNotesData(note));
    navigate("/notes");
  }

  const difficultyStyles = {
    Easy: {
      badge: "bg-green-500/10 border-green-500/20 text-green-400",
      glow: "from-green-500/10",
    },
    Medium: {
      badge: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
      glow: "from-yellow-500/10",
    },
    Hard: {
      badge: "bg-red-500/10 border-red-500/20 text-red-400",
      glow: "from-red-500/10",
    },
  };

  const current = difficultyStyles[note.difficulty] || difficultyStyles.Medium;

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(dateString));
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      "
    >
      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
      >
        <div
          className="
          absolute
          -top-20
          -left-20
          h-60
          w-60
          rounded-full
          bg-purple-600/15
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          -bottom-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-cyan-500/15
          blur-[120px]
          "
        />
      </div>

      {/* Gradient Border */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-[3px]
        bg-gradient-to-r
        from-purple-500
        via-fuchsia-500
        to-cyan-500
        "
      />

      <div className="relative z-10 p-6 md:p-7">
        {/* Top */}

        <div className="flex justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Icon */}

            <div
              className="
              hidden
              sm:flex
              h-14
              w-14
              rounded-2xl
              bg-gradient-to-br
              from-purple-600/20
              to-cyan-500/20
              border
              border-white/10
              items-center
              justify-center
              "
            >
              <FaBookOpen
                size={22}
                className="
                text-cyan-300
                "
              />
            </div>

            <div>
              {/* Difficulty */}

              {/* Title */}

              <h2
                className="
                mb-3
                text-xl
                md:text-2xl
                font-black
                leading-tight
                "
              >
                {note.title}
              </h2>
              <div
                className={`
                inline-flex
                items-center
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-medium
                ${current.badge}
                `}
              >
                {note.difficulty}
              </div>
            </div>
          </div>

          {/* Bookmark */}
        </div>

        {/* Overview */}

        <p
          className="
          mt-5
          text-slate-400
          leading-7
          line-clamp-2
          "
        >
          {note.overview}
        </p>

        {/* Tags */}

        {/* Bottom */}

        <div
          className="
          mt-7
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          "
        >
          {/* Meta */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >
            <div
              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/5
              border
              border-white/10
              px-4
              py-2
              text-sm
              "
            >
              <FaCalendarAlt />

              {formatDate(Note.createdAt).toUpperCase()}
            </div>
          </div>

          {/* Actions */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >
            <button
              onClick={handleClick}
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              px-5
              py-3
              font-semibold
              shadow-lg
              shadow-purple-500/20
              hover:scale-[1.02]
              transition
              "
            >
              Open Notes
              <FaArrowRight />
            </button>

            <button
              onClick={() => {
                console.log("note to delete : ", note);
                onDelete(note);
              }}
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-3
              text-red-300
              hover:bg-red-500/20
              transition
              "
            >
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
