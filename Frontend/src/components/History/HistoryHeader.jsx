import { motion } from "framer-motion";
import {
  FaHistory,
  FaBookOpen,
  FaBrain,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HistoryHeader({ totalNotes = 0 }) {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      md:p-10
      "
    >
      {/* Animated Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        -top-24
        -left-24
        h-72
        w-72
        rounded-full
        bg-purple-600/20
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        -bottom-24
        -right-24
        h-72
        w-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">
        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
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
          <FaHistory />
          AI Notes History
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
          mt-5
          text-4xl
          md:text-6xl
          font-black
          leading-tight
          "
        >
          Your Learning
          <span
            className="
            block
            bg-gradient-to-r
            from-purple-400
            via-fuchsia-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            History Dashboard
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-5
          max-w-3xl
          text-slate-400
          text-lg
          leading-8
          "
        >
          Access all previously generated AI notes, continue your learning
          journey, revise important concepts and prepare faster.
        </motion.p>

        {/* CTA */}

        <motion.button
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          onClick={() => navigate("/upload")}
          className="
          mt-8
          flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-purple-600
          to-cyan-500
          px-6
          py-4
          font-semibold
          shadow-lg
          shadow-purple-500/20
          transition
          hover:scale-[1.02]
          "
        >
          Generate New Notes
          <FaArrowRight />
        </motion.button>

        {/* Stats */}

        <div
          className="
          mt-10
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {/* Total Notes */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-5
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-purple-500/10
                text-purple-400
                "
              >
                <FaBookOpen size={24} />
              </div>

              <div>
                <p className="text-slate-400">Total Notes</p>

                <h3 className="text-3xl font-black">{totalNotes}</h3>
              </div>
            </div>
          </motion.div>

          {/* AI Generated */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-5
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-cyan-500/10
                text-cyan-400
                "
              >
                <FaBrain size={24} />
              </div>

              <div>
                <p className="text-slate-400">AI Generated</p>

                <h3 className="text-3xl font-black">100%</h3>
              </div>
            </div>
          </motion.div>

          {/* Study Time */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-5
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-green-500/10
                text-green-400
                "
              >
                <FaClock size={24} />
              </div>

              <div>
                <p className="text-slate-400">Study Time</p>

                <h3 className="text-3xl font-black">18h+</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
