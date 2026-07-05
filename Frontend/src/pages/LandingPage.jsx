import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaBook,
  FaFilePdf,
  FaBrain,
  FaArrowRight,
  FaStar,
  FaBars,
  FaTimes,
  FaHome,
  FaCogs,
  FaSignInAlt,
} from "react-icons/fa";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };
  const features = [
    {
      icon: <FaRobot size={35} />,
      title: "AI Generated Notes",
      desc: "Generate concise and exam-focused notes instantly.",
    },
    {
      icon: <FaBook size={35} />,
      title: "Topic Wise Summary",
      desc: "Get important concepts chapter-wise.",
    },
    {
      icon: <FaFilePdf size={35} />,
      title: "PDF Export",
      desc: "Download notes as PDF in one click.",
    },
    {
      icon: <FaBrain size={35} />,
      title: "Smart Learning",
      desc: "AI identifies important exam topics.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
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
              <button
                className="
          text-gray-300
          hover:text-white
          transition
          cursor-pointer
          "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>

              <button
                className="
          bg-gradient-to-r
          from-purple-600
          to-cyan-500
          px-5
          py-2.5
          rounded-xl
          font-medium
          hover:scale-105
          transition
          shadow-lg
          shadow-purple-500/20
          cursor-pointer

          "
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </button>
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
              <h3 className="font-semibold text-white">Navigation</h3>

              <p className="text-xs text-gray-400 mt-1">Explore ExamNotes AI</p>
            </div>

            {/* Menu Links */}

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
        border-slate-700
        hover:bg-slate-800
        transition
          cursor-pointer

        "
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
              >
                Login
              </button>

              <button
                className="
        w-full
        py-3
        rounded-xl
        bg-gradient-to-r
        from-purple-600
        to-cyan-500
        font-semibold
        hover:scale-[1.02]
        transition
          cursor-pointer

        "
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/signup");
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-5 md:px-10 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <div
              className="
        inline-flex
        items-center
        gap-2
        bg-purple-500/10
        border
        border-purple-500/20
        text-purple-300
        px-4
        py-2
        rounded-full
        text-sm
        "
            >
              🤖 AI Powered Exam Preparation
            </div>

            <h1
              className="
        mt-6
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        font-extrabold
        leading-tight
        "
            >
              Generate
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
                Smart Notes
              </span>
              In Seconds
            </h1>

            <p
              className="
        mt-6
        text-gray-400
        text-base
        md:text-lg
        max-w-xl
        "
            >
              Upload PDFs, study material and handwritten notes. Let AI generate
              concise notes, summaries, important questions and revision sheets
              instantly.
            </p>

            {/* BUTTONS */}

            <div
              className="
        flex
        flex-col
        sm:flex-row
        gap-4
        mt-8
        "
            >
              <button
                className="
          bg-purple-600
          hover:bg-purple-700
          px-8
          py-4
          rounded-2xl
          flex
          items-center
          justify-center
          gap-2
          font-medium
          transition
          "
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Get Started
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative perspective-distant">
            {/* Glow */}

            <div
              className="
    absolute
    inset-0
    bg-gradient-to-r
    from-purple-600
    via-cyan-500
    to-purple-500
    blur-[120px]
    opacity-30
    "
            />

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
    absolute
    -top-5
    -right-3
    z-30
    hidden
    md:flex
    items-center
    gap-2
    bg-slate-900/90
    backdrop-blur-xl
    border
    border-purple-500/20
    px-4
    py-3
    rounded-2xl
    shadow-lg
    "
            >
              🤖 AI Processing...
            </motion.div>

            {/* Main Card */}

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.04,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
    relative
    rounded-[32px]
    overflow-hidden
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    shadow-[0_0_60px_rgba(139,92,246,0.25)]
    "
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students"
                className="
      w-full
      h-full
      object-cover
      "
              />

              {/* Overlay */}

              <div
                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/70
      via-black/10
      to-transparent
      "
              />

              {/* Bottom Content */}

              <div
                className="
      absolute
      bottom-0
      left-0
      right-0
      p-6
      "
                style={{
                  transform: "translateZ(60px)",
                }}
              >
                <h3 className="text-2xl font-bold">AI Powered Learning</h3>

                <p className="text-gray-300 mt-2">
                  Upload PDFs and generate notes instantly.
                </p>
              </div>
            </motion.div>

            {/* Floating Stats */}

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
    -bottom-5
    left-5
    hidden
    md:block
    bg-slate-900/90
    backdrop-blur-xl
    border
    border-cyan-500/20
    px-5
    py-3
    rounded-2xl
    "
            >
              ⚡ fast and accurate AI notes generation
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Workflow */}
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

      {/* CTA */}
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
                navigate("/signup");
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

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 ExamNotes.Ai. All Rights Reserved.
      </footer>
    </div>
  );
}
