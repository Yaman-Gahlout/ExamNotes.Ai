import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaArrowRight,
  FaMagic,
  FaBrain,
  FaBookOpen,
  FaQuestionCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { base_url } from "../App";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNotesData } from "../redux/slices/user.slice";

export default function UploadPage() {
  const inputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;

        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [loading]);

  const stages = [
    "📄 Reading PDF...",
    "🧹 Cleaning extracted text...",
    "🧠 Understanding concepts...",
    "📝 Generating exam notes...",
    "📊 Creating diagrams...",
    "❓ Preparing MCQs...",
    "✅ Finalizing notes...",
  ];

  const stage = stages[Math.min(Math.floor(progress / 15), stages.length - 1)];
  const handleSelectFile = (file) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size must be less than 10 MB.");
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    handleSelectFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("pdf", selectedFile);

      const response = await axios.post(`${base_url}/users/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Notes Generated Sucessfully!");

      setProgress(100);
      setLoading(false);

      setSelectedFile(null);
      dispatch(setNotesData(response.data.notes.content));
      console.log("Going to notes page");
      navigate("/notes");
    } catch (error) {
      console.log(error.data);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      <Navbar isUpload={true} />
      {/* ========================= */}
      {/* Animated Background */}
      {/* ========================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
          absolute
          -top-24
          -left-24
          w-[420px]
          h-[420px]
          bg-purple-600/20
          blur-[180px]
          rounded-full
          "
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-0
          right-0
          w-[420px]
          h-[420px]
          bg-cyan-500/20
          blur-[180px]
          rounded-full
          "
        />
      </div>

      {/* Grid Overlay */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        -z-10
        "
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <section className="pt-16 pb-8 px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="max-w-7xl mx-auto text-center"
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            "
          >
            <FaMagic />
            AI Powered Exam Preparation
          </span>

          <h1
            className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            Upload Your
            <span
              className="
              block
              bg-gradient-to-r
              from-purple-400
              via-cyan-400
              to-blue-400
              bg-clip-text
              text-transparent
              "
            >
              Study Material
            </span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-gray-400
            max-w-3xl
            mx-auto
            "
          >
            Drop a PDF and let ExamNotes AI generate beautiful notes, chapter
            summaries, important questions and MCQs within seconds.
          </p>
        </motion.div>
      </section>

      {/* ========================= */}
      {/* Main Workspace */}
      {/* ========================= */}

      <section className="px-5 pb-16">
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
    relative
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-2xl
    p-6
    shadow-[0_20px_60px_rgba(139,92,246,0.15)]
    overflow-hidden
  "
          >
            {/* Floating Glow */}

            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full" />

            {/* Header */}

            <div className="relative flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Upload PDF</h2>

                <p className="text-sm text-gray-400 mt-1">
                  Drag & drop your study material or browse files.
                </p>
              </div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FaFilePdf className="text-4xl text-red-400" />
              </motion.div>
            </div>

            {/* Upload Zone */}

            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current.click()}
              className={`
      cursor-pointer
      transition-all
      rounded-3xl
      border-2
      border-dashed
      p-12
      text-center

      ${
        dragActive
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-purple-500/30 hover:border-cyan-400 hover:bg-white/5"
      }
    `}
            >
              <input
                ref={inputRef}
                hidden
                type="file"
                accept=".pdf"
                onChange={(e) => handleSelectFile(e.target.files[0])}
              />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <FaCloudUploadAlt className="mx-auto text-7xl text-cyan-400" />
              </motion.div>

              <h3 className="mt-6 text-3xl font-bold">Drop Your PDF Here</h3>

              <p className="mt-3 text-gray-400">or click to browse files</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm">
                📄 Supports PDF up to 10 MB
              </div>
            </motion.div>

            {/* Selected File */}

            {selectedFile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="
      mt-8
      rounded-2xl
      border
      border-white/10
      bg-slate-900/70
      p-5
      relative
    "
              >
                {/* Remove Button */}

                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="
        absolute
        top-3
        right-3
        w-8
        h-8
        rounded-full
        bg-red-500/10
        hover:bg-red-500/20
        text-red-400
        flex
        items-center
        justify-center
        transition
      "
                  aria-label="Remove selected PDF"
                >
                  <IoClose size={20} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <FaFilePdf className="text-red-400 text-2xl" />
                  </div>

                  <div className="flex-1 pr-10">
                    <h4 className="font-semibold break-all">
                      {selectedFile.name}
                    </h4>

                    <p className="text-sm text-gray-400 mt-1">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                    <p className="text-xs text-green-400 mt-2">
                      ✓ Ready to generate notes
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                  />
                </div>
              </motion.div>
            )}

            {/* Quick Features */}

            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-4 text-center">
                📚 Notes
              </div>

              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4 text-center">
                📝 Summary
              </div>

              <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-4 text-center">
                🎯 MCQs
              </div>

              <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/20 p-4 text-center">
                ⚡ Revision
              </div>
            </div>
          </motion.div>

          {/* ========= RIGHT SIDE ========= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
    relative
    rounded-[32px]
    border
    border-white/10
    bg-gradient-to-br
    from-slate-900/80
    to-slate-800/40
    backdrop-blur-2xl
    p-8
    overflow-hidden
  "
          >
            {/* Glow */}

            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <FaBrain className="text-purple-400 text-xl" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">AI Preview</h2>

                  <p className="text-gray-400 text-sm">
                    What ExamNotes AI will generate
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: <FaBookOpen />,
                    title: "Structured Notes",
                    color: "purple",
                  },
                  {
                    icon: <FaBrain />,
                    title: "AI Summary",
                    color: "cyan",
                  },
                  {
                    icon: <FaQuestionCircle />,
                    title: "Important Questions",
                    color: "green",
                  },
                  {
                    icon: <FaMagic />,
                    title: "Revision Sheet",
                    color: "yellow",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 8,
                    }}
                    className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            p-4
          "
                  >
                    <div className="text-cyan-400 text-xl">{item.icon}</div>

                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="text-sm text-gray-400">
                        AI generated instantly
                      </p>
                    </div>

                    <span className="text-green-400">✓</span>
                  </motion.div>
                ))}
              </div>

              {/* Animated Progress */}

              {loading && (
                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">
                      AI is generating your notes
                    </h3>

                    <span className="text-cyan-400 font-semibold">
                      {progress >= 100 ? 99 : progress}%
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">{stage}</p>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${progress >= 100 ? 99 : progress}%`,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
                    />
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    Please don't close this page while your notes are being
                    prepared.
                  </p>
                </div>
              )}

              {/* Upload Button */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={!selectedFile || loading}
                onClick={handleUpload}
                className="
        mt-10
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        via-indigo-500
        to-cyan-500
        font-bold
        text-lg
        flex
        items-center
        justify-center
        gap-3
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="
              w-5
              h-5
              border-2
              border-white
              border-t-transparent
              rounded-full
            "
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <FaArrowRight />
                    Generate Exam Notes
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Your files are processed securely and are not shared.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
