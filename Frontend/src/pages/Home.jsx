import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaBars,
  FaTimes,
  FaRobot,
  FaBook,
  FaBrain,
  FaFilePdf,
  FaArrowRight,
  FaHome,
  FaCogs,
  FaSignInAlt,
} from "react-icons/fa";

import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import creadits from "../assets/diamond.png";

import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../App";
import { setUserData } from "../redux/slices/user.slice";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const userData = useSelector((state) => state.user.userData);
  console.log("user in Home : ", userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const features = [
    {
      icon: <FaRobot />,
      title: "AI Notes",
      desc: "Generate exam-ready notes instantly.",
    },
    {
      icon: <FaBrain />,
      title: "Smart Summaries",
      desc: "Focus on important concepts only.",
    },
    {
      icon: <FaBook />,
      title: "MCQ Generator",
      desc: "Create practice questions automatically.",
    },
    {
      icon: <FaFilePdf />,
      title: "PDF Export",
      desc: "Download notes in PDF format.",
    },
  ];

  const subjects = [
    "Java",
    "DSA",
    "DBMS",
    "Operating System",
    "Computer Networks",
    "React",
    "Node.js",
    "MongoDB",
    "OOPs",
    "Aptitude",
    "SQL",
    "JavaScript",
  ];

  useGetCurrentUser();

  const logoutHandler = async () => {
    try {
      await axios.get(`${base_url}/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logout successfully");
      localStorage.removeItem("token");
      dispatch(setUserData(null));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"
        />
      </div>

      <nav className="sticky top-0 z-50">
        {/* Glass Navbar */}

        <div
          className="
          backdrop-blur-2xl
          bg-slate-950/70
          border-b
          border-white/10
          "
        >
          <div
            className="
            max-w-350
            mx-auto
            px-5
            md:px-10
            py-4
            flex
            justify-between
            items-center
            "
          >
            {/* Logo */}

            <div className="group cursor-pointer">
              <h1
                onClick={() => navigate("/home")}
                className="
                text-2xl
                md:text-3xl
                font-black
                bg-gradient-to-r
                from-purple-500
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
                "
              >
                ExamNotes.Ai
              </h1>

              <div
                className="
                h-[2px]
                bg-gradient-to-r
                from-purple-500
                to-cyan-400
                scale-x-0
                group-hover:scale-x-100
                transition
                duration-300
                "
              />
            </div>

            {/* Desktop Menu */}

            <div className="hidden md:flex items-center gap-8">
              {[
                { title: "Features", link: "features" },
                { title: "Workflow", link: "workflow" },
              ].map((item) => (
                <div
                  key={item.title}
                  onClick={() => scrollToSection(item.link)}
                  className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition
                   cursor-pointer
                  group
                  "
                >
                  {item.title}

                  <span
                    className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    bg-cyan-400
                    group-hover:w-full
                    transition-all
                    duration-300
                    "
                  />
                </div>
              ))}
              <div
                onClick={() => navigate("/upload")}
                className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition
                  group
                  cursor-pointer
                  "
              >
                Upload
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    bg-cyan-400
                    group-hover:w-full
                    transition-all
                    duration-300
                    "
                />
              </div>
              <div
                onClick={() => navigate("/history")}
                className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition
                  group
                  cursor-pointer
                  "
              >
                History
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    bg-cyan-400
                    group-hover:w-full
                    transition-all
                    duration-300
                    "
                />
              </div>

              <div
                onClick={() => navigate("/pricing")}
                className="flex items-center cursor-pointer gap-3 border border-white/10 rounded-xl px-4 py-2"
              >
                <img src={creadits} alt="Creadits" className="w-6 h-6" />
                {userData?.credits}
              </div>

              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center justify-center border border-white/10 rounded-full h-10 w-10 text-xl cursor-pointer hover:border-cyan-400 transition"
                >
                  {userData?.name.charAt(0).toUpperCase()}
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-2xl z-50">
                    <div className="p-4 border-b border-slate-800">
                      <h3 className="font-semibold text-white">
                        {userData?.name}
                      </h3>
                    </div>
                    <div className="p-2 space-y-2">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-slate-800 rounded-xl transition text-red-500 cursor-pointer"
                        onClick={() => {
                          setProfileMenuOpen(false);
                          logoutHandler();
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
              md:hidden
              w-11
              h-11
              rounded-xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
              cursor-pointer
              "
            >
              {menuOpen ? (
                <FaTimes className="text-cyan-400" />
              ) : (
                <FaBars className="text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}

        {menuOpen && (
          <div
            className="
          absolute
          top-20
          right-4
          w-72
          bg-slate-900/95
          backdrop-blur-2xl
          border
          border-slate-700
          rounded-3xl
          shadow-2xl
          shadow-purple-500/10
          overflow-hidden
          md:hidden
          z-50
          "
          >
            {/* Header */}

            <div className="px-5 py-4 border-b border-slate-800">
              <h3 className="font-semibold text-white">{userData?.name}</h3>

              <p className="text-xs text-gray-400 mt-1">Explore ExamNotes AI</p>
            </div>

            {/* Menu Links */}

            <div className="p-3 space-y-2">
              <a
                onClick={() => navigate("/upload")}
                className="
                              flex
                              items-center
                              gap-3
                              px-4
                              py-3
                              rounded-xl
                              hover:bg-slate-800
                              transition
                              "
              >
                <FaCloudUploadAlt className="text-cyan-400" />
                <span>Upload</span>
              </a>

              <a
                onClick={() => navigate("/history")}
                className="
                              flex
                              items-center
                              gap-3
                              px-4
                              py-3
                              rounded-xl
                              hover:bg-slate-800
                              transition
                              "
              >
                <FaCogs className="text-purple-400" />
                <span>{"History"}</span>
              </a>
            </div>

            <div
              onClick={() => navigate("/pricing")}
              className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-2 mb-4 mx-4 cursor-pointer"
            >
              <img src={creadits} alt="Creadits" className="w-6 h-6" />
              {userData?.credits}
            </div>

            {/* Divider */}

            <div className="border-t border-slate-800" />

            {/* Auth Buttons */}

            <div className="p-4 space-y-3">
              <button
                className="
                  w-full
                  py-3
                  rounded-xl
                  border
                  border-red-500
                  hover:bg-red-500
                  hover:text-gray-200
                  transition-all
                  duration-200
                  cursor-pointer
                  text-red-500
                  "
                onClick={() => {
                  setMenuOpen(false);
                  logoutHandler();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Section*/}
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
            AI Powered Learning
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Turn Any PDF Into
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Exam Ready Notes
            </span>
          </h1>

          <div className="mt-6 text-cyan-300 text-2xl font-semibold">
            <TypeAnimation
              sequence={[
                "Generate Notes",
                1500,
                "Generate MCQs",
                1500,
                "Generate Summaries",
                1500,
                "Generate Revision Sheets",
                1500,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 text-lg">
            Upload study material and let AI generate notes, summaries, MCQs and
            revision sheets instantly.
          </p>

          <button
            onClick={() => navigate("/upload")}
            className="cursor-pointer mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center gap-2"
          >
            Start Generating <FaArrowRight />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow */}

          <div
            className="
    absolute
    inset-0
    bg-gradient-to-r
    from-purple-600/30
    to-cyan-500/30
    blur-[120px]
    "
          />

          {/* Main Upload Card */}

          <motion.div
            whileHover={{
              rotateY: 8,
              rotateX: -5,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="
    relative
    backdrop-blur-xl
    bg-white/5
    border
    border-white/10
    rounded-[32px]
    p-6
    overflow-hidden
    "
          >
            {/* Header */}

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">AI Note Generator</h3>

              <span
                className="
        px-3
        py-1
        rounded-full
        bg-green-500/20
        text-green-400
        text-sm
        "
              >
                Online
              </span>
            </div>

            {/* Upload Box */}

            <label
              className={`
      block
      border-2
      border-dashed
      rounded-3xl
      p-10
      text-center
      cursor-pointer
      transition-all
      ${
        dragActive
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-purple-500/30 hover:border-cyan-400"
      }
      `}
            >
              <input
                //type="file"
                //accept=".pdf"
                className="hidden"
                onClick={() => navigate("/upload")}
                //onChange={handleFileChange}
              />

              <FaCloudUploadAlt
                className="
        text-6xl
        mx-auto
        text-cyan-400
        "
              />

              <h3 className="mt-5 text-2xl font-bold">Upload Your PDF</h3>

              <p className="text-gray-400 mt-2">
                Drag & Drop or Click to Browse
              </p>

              {fileName && (
                <div
                  className="
          mt-5
          inline-flex
          items-center
          gap-2
          bg-purple-500/10
          px-4
          py-2
          rounded-xl
          "
                >
                  <FaFilePdf className="text-red-400" />
                  {fileName}
                </div>
              )}
            </label>

            {/* Generated Outputs */}

            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="
        bg-purple-500/10
        border
        border-purple-500/20
        p-4
        rounded-2xl
        "
              >
                📚 Notes
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
        bg-cyan-500/10
        border
        border-cyan-500/20
        p-4
        rounded-2xl
        "
              >
                📝 Summary
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
        bg-green-500/10
        border
        border-green-500/20
        p-4
        rounded-2xl
        "
              >
                🎯 MCQs
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
        bg-yellow-500/10
        border
        border-yellow-500/20
        p-4
        rounded-2xl
        "
              >
                ⚡ Revision
              </motion.div>
            </div>

            {/* Processing Animation */}

            <motion.div
              animate={{
                width: ["0", "20%", "60%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
      h-2
      mt-6
      rounded-full
      bg-gradient-to-r
      from-purple-500
      to-cyan-400
      "
            />
          </motion.div>

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
    absolute
    -top-4
    -right-4
    bg-slate-900/90
    border
    border-white/10
    px-4
    py-3
    rounded-2xl
    hidden
    md:block
    "
          >
            🤖 AI Processing
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
    absolute
    -bottom-4
    -left-4
    bg-slate-900/90
    border
    border-white/10
    px-4
    py-3
    rounded-2xl
    hidden
    md:block
    "
          >
            ⚡ Fast notes generation
          </motion.div>
        </motion.div>
      </section>

      <section className="py-12 overflow-hidden relative">
        {/* Background Glow */}

        <div
          className="
    absolute
    left-0
    top-0
    w-72
    h-72
    bg-purple-600/10
    blur-[120px]
    rounded-full
    "
        />

        <div
          className="
    absolute
    right-0
    bottom-0
    w-72
    h-72
    bg-cyan-500/10
    blur-[120px]
    rounded-full
    "
        />

        {/* Heading */}

        <div className="text-center mb-8">
          <span
            className="
      px-4
      py-2
      rounded-full
      bg-purple-500/10
      border
      border-purple-500/20
      text-purple-300
      "
          >
            📚 Popular Subjects
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Learn Anything With
            <span
              className="
        block
        bg-gradient-to-r
        from-purple-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
            >
              ExamNotes.Ai
            </span>
          </h2>
        </div>

        {/* Marquee */}

        <div className="relative">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 whitespace-nowrap"
          >
            {[...subjects, ...subjects].map((subject, index) => (
              <div
                key={index}
                className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-2xl
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            hover:border-cyan-400
            transition
            "
              >
                <span className="text-cyan-400">✨</span>

                <span className="font-medium">{subject}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-24" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider">
              Features
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Everything You Need To
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ace Your Exams
              </span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              Generate notes, summaries, MCQs, revision sheets and important
              questions instantly using AI.
            </p>
          </div>

          {/* Bento Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Card */}

            <div
              className="
        lg:col-span-2
        lg:row-span-2
        bg-gradient-to-br
        from-purple-600/20
        to-cyan-500/10
        border
        border-purple-500/20
        rounded-3xl
        p-8
        backdrop-blur-xl
        hover:scale-[1.02]
        transition
        "
            >
              <FaBrain size={55} className="text-purple-400" />

              <h3 className="text-3xl font-bold mt-6">AI Smart Learning</h3>

              <p className="text-gray-300 mt-4 text-lg">
                Our AI analyzes your study material and automatically generates
                exam-focused notes, summaries and important concepts.
              </p>

              <div
                className="
          mt-8
          bg-slate-900/60
          border
          border-slate-700
          rounded-2xl
          p-5
          "
              >
                <p className="text-green-400">✓ 95% Accuracy</p>

                <p className="text-green-400 mt-2">✓ Instant Generation</p>

                <p className="text-green-400 mt-2">✓ Exam Ready Notes</p>
              </div>
            </div>

            {/* Card 1 */}

            <div
              className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-purple-500
        hover:-translate-y-2
        transition-all
        duration-300
        "
            >
              <FaRobot size={35} className="text-cyan-400" />

              <h3 className="mt-5 text-xl font-semibold">AI Notes</h3>

              <p className="text-gray-400 mt-3">
                Generate detailed notes in seconds.
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-cyan-500
        hover:-translate-y-2
        transition-all
        duration-300
        "
            >
              <FaBook size={35} className="text-purple-400" />

              <h3 className="mt-5 text-xl font-semibold">Summaries</h3>

              <p className="text-gray-400 mt-3">
                Chapter-wise concise summaries.
              </p>
            </div>

            {/* Wide Card */}

            <div
              className="
        md:col-span-2
        bg-gradient-to-r
        from-slate-900
        to-slate-800
        border
        border-slate-700
        rounded-3xl
        p-8
        "
            >
              <FaFilePdf size={40} className="text-red-400" />

              <h3 className="mt-4 text-2xl font-bold">PDF Export</h3>

              <p className="text-gray-400 mt-3">
                Download your notes and summaries as beautiful PDFs with a
                single click.
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-yellow-500
        hover:-translate-y-2
        transition-all
        duration-300
        "
            >
              <div className="text-4xl">🎯</div>

              <h3 className="mt-5 text-xl font-semibold">Important Topics</h3>

              <p className="text-gray-400 mt-3">
                AI detects frequently asked questions.
              </p>
            </div>

            {/* Card 5 */}

            <div
              className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-green-500
        hover:-translate-y-2
        transition-all
        duration-300
        "
            >
              <div className="text-4xl">⚡</div>

              <h3 className="mt-5 text-xl font-semibold">Revision Sheets</h3>

              <p className="text-gray-400 mt-3">Quick revision before exams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-24 bg-slate-900/50" id="workflow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              How It Works
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold">
              From PDF To
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Exam Ready Notes
              </span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Upload your study material and let AI transform it into concise
              notes, summaries, MCQs and revision sheets.
            </p>
          </div>

          <div className="relative mt-24">
            {/* Connection Line */}

            <div
              className="
        hidden lg:block
        absolute
        top-20
        left-0
        right-0
        h-[3px]
        bg-gradient-to-r
        from-purple-500
        via-cyan-500
        to-purple-500
        "
            />

            <div className="grid md:grid-cols-3 gap-10">
              {/* Step 1 */}

              <div
                className="
          relative
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          text-center
          hover:border-purple-500
          hover:-translate-y-2
          transition-all
          duration-300
          "
              >
                <div
                  className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-purple-500/20
            flex
            items-center
            justify-center
            text-4xl
            "
                >
                  📄
                </div>

                <h3 className="mt-6 text-2xl font-bold">Upload Notes</h3>

                <p className="mt-4 text-gray-400">
                  Upload PDFs, lecture notes or study material.
                </p>
              </div>

              {/* Step 2 */}

              <div
                className="
          relative
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          text-center
          hover:border-cyan-500
          hover:-translate-y-2
          transition-all
          duration-300
          "
              >
                <div
                  className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-cyan-500/20
            flex
            items-center
            justify-center
            text-4xl
            "
                >
                  🤖
                </div>

                <h3 className="mt-6 text-2xl font-bold">AI Processing</h3>

                <p className="mt-4 text-gray-400">
                  AI analyzes content and extracts important concepts.
                </p>

                {/* Loading Bar */}

                <div className="mt-6 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="
              h-full
              w-[85%]
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              rounded-full
              "
                  />
                </div>
              </div>

              {/* Step 3 */}

              <div
                className="
          relative
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          text-center
          hover:border-green-500
          hover:-translate-y-2
          transition-all
          duration-300
          "
              >
                <div
                  className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-green-500/20
            flex
            items-center
            justify-center
            text-4xl
            "
                >
                  ✅
                </div>

                <h3 className="mt-6 text-2xl font-bold">Get Results</h3>

                <p className="mt-4 text-gray-400">
                  Download Notes, Summaries, MCQs and Revision Sheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-5 overflow-hidden">
        {/* Background Glow */}

        <div className="absolute inset-0 -z-10">
          <div
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[500px]
      bg-purple-600/20
      blur-[140px]
      rounded-full
      "
          />

          <div
            className="
      absolute
      bottom-0
      right-0
      w-[300px]
      h-[300px]
      bg-cyan-500/20
      blur-[120px]
      rounded-full
      "
          />
        </div>

        <div
          className="
    max-w-5xl
    mx-auto
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-[40px]
    p-8
    md:p-16
    text-center
    "
        >
          {/* Badge */}

          <span
            className="
      inline-flex
      items-center
      px-4
      py-2
      rounded-full
      bg-purple-500/10
      border
      border-purple-500/20
      text-purple-300
      text-sm
      "
          >
            🚀 AI Powered Learning
          </span>

          {/* Heading */}

          <h2
            className="
      mt-8
      text-4xl
      sm:text-5xl
      lg:text-6xl
      font-black
      leading-tight
      "
          >
            Ready To
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
              Ace Your Exams?
            </span>
          </h2>

          {/* Description */}

          <p
            className="
      mt-6
      text-gray-400
      max-w-2xl
      mx-auto
      text-lg
      "
          >
            Generate smart notes, summaries, MCQs and revision sheets in seconds
            using the power of Artificial Intelligence.
          </p>

          {/* Buttons */}

          <div
            className="
      mt-10
      flex
      flex-col
      sm:flex-row
      justify-center
      gap-4
      "
          >
            <button
              className="
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        to-cyan-500
        font-semibold
        text-lg
        hover:scale-105
        transition
        shadow-lg
        shadow-purple-500/30
        "
              onClick={() => {
                setMenuOpen(false);
                navigate("/upload");
              }}
            >
              Start Generating Notes
            </button>
          </div>

          {/* Trust Line */}

          <div
            className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-6
      text-sm
      text-gray-500
      "
          >
            <span>✓ AI Generated Notes</span>
            <span>✓ Unlimited PDFs</span>
            <span>✓ Instant Summaries</span>
            <span>✓ Smart Revision</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 ExamNotes.Ai. All Rights Reserved.
      </footer>
    </div>
  );
}
