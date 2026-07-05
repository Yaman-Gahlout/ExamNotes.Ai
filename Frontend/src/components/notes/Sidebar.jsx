import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaBookOpen,
  FaLightbulb,
  FaBrain,
  FaClipboardList,
  FaCalculator,
  FaBolt,
  FaQuestionCircle,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: "overview",
    title: "Overview",
    icon: <FaBookOpen />,
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <FaLightbulb />,
  },
  {
    id: "concepts",
    title: "Key Concepts",
    icon: <FaBrain />,
  },
  {
    id: "notes",
    title: "Detailed Notes",
    icon: <FaClipboardList />,
  },
  //   {
  //     id: "formulas",
  //     title: "Formulas",
  //     icon: <FaCalculator />,
  //   },
  {
    id: "mcqs",
    title: "Practice",
    icon: <FaQuestionCircle />,
  },
  {
    id: "revision",
    title: "Revision",
    icon: <FaBolt />,
  },
];

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* ========================= */}
      {/* Desktop Sidebar */}
      {/* ========================= */}

      <aside
        className="
        hidden
        lg:flex
        sticky
        top-0
        h-screen
        w-[280px]
        flex-col
        border-r
        border-white/10
        bg-slate-950/40
        backdrop-blur-xl
        "
      >
        {/* Logo */}

        <div className="p-6">
          <h2
            className="
            text-2xl
            font-black
            bg-gradient-to-r
            from-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
            cursor-pointer
            "
            onClick={() => navigate("/home")}
          >
            ExamNotes.Ai
          </h2>

          <p className="text-sm text-slate-400 mt-2">AI Powered Learning</p>
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-2xl
              text-slate-300
              hover:text-white
              hover:bg-gradient-to-r
              hover:from-purple-500/10
              hover:to-cyan-500/10
              transition-all
              duration-300
              "
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">{item.title}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Card */}

        <div className="p-4">
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-purple-500/10
            to-cyan-500/10
            p-5
            "
          >
            <h3 className="font-bold">🚀 Study Smarter</h3>

            <p className="text-sm text-slate-400 mt-2">
              AI-generated notes, MCQs, revision sheets and summaries.
            </p>
          </div>
        </div>
      </aside>

      {/* ========================= */}
      {/* Mobile Drawer */}
      {/* ========================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-[100]
            bg-black/60
            backdrop-blur-sm
            lg:hidden
           
            "
          >
            {/* Drawer */}

            <motion.div
              initial={{
                x: -320,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -320,
              }}
              transition={{
                type: "spring",
                damping: 25,
              }}
              className="
              h-full
              w-[280px]
              bg-[#020617]
              border-r
              border-white/10
              "
            >
              {/* Header */}

              <div
                className="
                flex
                items-center
                justify-between
                p-5
                border-b
                border-white/10
              

                "
              >
                <div>
                  <h2
                    className="
                    text-xl
                    font-black
                    bg-gradient-to-r
                    from-purple-400
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                    cursor-pointer
                    "
                    onClick={() => navigate("/home")}
                  >
                    ExamNotes.Ai
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  "
                >
                  <FaTimes />
                </button>
              </div>

              {/* Links */}

              <div className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="
                    w-full
                    flex
                    items-center
                    gap-4
                    px-4
                    py-4
                    rounded-2xl
                    text-left
                    text-slate-300
                    hover:text-white
                    hover:bg-gradient-to-r
                    hover:from-purple-500/10
                    hover:to-cyan-500/10
                    transition
                    "
                  >
                    <span className="text-lg">{item.icon}</span>

                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
