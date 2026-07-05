import { motion } from "framer-motion";
import {
  FaRobot,
  FaFilePdf,
  FaArrowRight,
  FaMagic,
  FaBrain,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  const navigate = useNavigate();

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      md:p-12
      "
    >
      {/* Glow Effects */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        -top-20
        -left-20
        h-72
        w-72
        rounded-full
        bg-purple-600/20
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        -bottom-20
        -right-20
        h-72
        w-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        text-center
        "
      >
        {/* AI Icon */}

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
          relative
          "
        >
          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-purple-500/30
            blur-[50px]
            "
          />

          <div
            className="
            relative
            h-28
            w-28
            rounded-full
            bg-gradient-to-br
            from-purple-600
            via-fuchsia-500
            to-cyan-500
            flex
            items-center
            justify-center
            shadow-lg
            shadow-purple-500/30
            "
          >
            <FaRobot size={50} className="text-white" />
          </div>
        </motion.div>

        {/* Badge */}

        <div
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-purple-500/20
          bg-purple-500/10
          px-4
          py-2
          text-sm
          text-purple-300
          "
        >
          <FaBrain />
          AI Study Assistant
        </div>

        {/* Heading */}

        <h2
          className="
          mt-6
          text-4xl
          md:text-6xl
          font-black
          leading-tight
          "
        >
          No Notes Yet
        </h2>

        <h3
          className="
          mt-2
          text-2xl
          md:text-4xl
          font-black
          bg-gradient-to-r
          from-purple-400
          via-fuchsia-400
          to-cyan-400
          bg-clip-text
          text-transparent
          "
        >
          Let's Create Something Amazing
        </h3>

        {/* Description */}

        <p
          className="
          mt-6
          max-w-2xl
          text-slate-400
          text-lg
          leading-8
          "
        >
          Upload your PDF, study material, handwritten notes or class notes and
          let ExamNotes AI generate beautiful exam-oriented notes, MCQs,
          revision sheets, summaries and interview questions instantly.
        </p>

        {/* Feature Chips */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >
          {[
            "MCQs",
            "Revision Notes",
            "Interview Questions",
            "Diagrams",
            "Flowcharts",
            "PDF Export",
          ].map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
          "
        >
          <button
            onClick={() => navigate("/upload")}
            className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            shadow-lg
            shadow-purple-500/20
            hover:scale-[1.02]
            transition
            "
          >
            <FaFilePdf />
            Upload PDF
            <FaArrowRight />
          </button>

          <button
            onClick={() => navigate("/")}
            className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            font-semibold
            hover:bg-white/10
            transition
            "
          >
            <FaMagic />
            Explore Features
          </button>
        </div>

        {/* Bottom Stats */}

        <div
          className="
          mt-12
          grid
          w-full
          max-w-3xl
          gap-4
          md:grid-cols-3
          "
        >
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
            "
          >
            <h4 className="text-3xl font-black text-purple-400">10K+</h4>

            <p className="text-slate-400">Students</p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
            "
          >
            <h4 className="text-3xl font-black text-cyan-400">50K+</h4>

            <p className="text-slate-400">Notes Generated</p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
            "
          >
            <h4 className="text-3xl font-black text-green-400">95%</h4>

            <p className="text-slate-400">Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
