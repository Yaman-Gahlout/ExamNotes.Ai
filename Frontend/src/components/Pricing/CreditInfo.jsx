import { motion } from "framer-motion";
import { FaCoins, FaFilePdf, FaBolt, FaBrain } from "react-icons/fa";

export default function CreditInfo() {
  const packs = [
    {
      credits: 150,
      generations: 15,
      color: "text-purple-400",
    },
    {
      credits: 350,
      generations: 35,
      color: "text-cyan-400",
    },
    {
      credits: 1000,
      generations: 100,
      color: "text-green-400",
    },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      md:p-10
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-24
        -left-24
        h-80
        w-80
        rounded-full
        bg-purple-600/10
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        -bottom-24
        -right-24
        h-80
        w-80
        rounded-full
        bg-cyan-500/10
        blur-[150px]
        "
      />

      <div className="relative z-10">
        {/* Badge */}

        <div
          className="
          inline-flex
          items-center
          gap-2
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
          <FaCoins />
          Credit System
        </div>

        {/* Heading */}

        <h2
          className="
          mt-5
          text-4xl
          md:text-5xl
          font-black
          "
        >
          How Credits Work
        </h2>

        <p
          className="
          mt-4
          max-w-3xl
          text-slate-400
          text-lg
          leading-8
          "
        >
          ExamNotes AI uses a simple credit system. Every AI note generation
          consumes credits. Purchase credits once and use them whenever you need
          powerful exam-oriented notes.
        </p>

        {/* Main Credit Card */}

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="
          mt-10
          rounded-[32px]
          border
          border-purple-500/20
          bg-gradient-to-r
          from-purple-600/10
          via-fuchsia-500/10
          to-cyan-500/10
          p-8
          "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            "
          >
            <div>
              <div
                className="
                flex
                items-center
                gap-3
                "
              >
                <FaFilePdf
                  className="
                  text-purple-400
                  text-3xl
                  "
                />

                <h3
                  className="
                  text-3xl
                  font-black
                  "
                >
                  1 Note Generation
                </h3>
              </div>

              <p
                className="
                mt-3
                text-slate-400
                "
              >
                Upload PDF → Generate Notes
              </p>
            </div>

            <div
              className="
              text-5xl
              font-black
              bg-gradient-to-r
              from-purple-400
              via-fuchsia-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              10 Credits
            </div>
          </div>
        </motion.div>

        {/* Packs */}

        <div
          className="
          mt-10
          grid
          gap-5
          md:grid-cols-3
          "
        >
          {packs.map((item) => (
            <motion.div
              key={item.credits}
              whileHover={{
                y: -6,
              }}
              className="
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              "
            >
              <div
                className="
                flex
                items-center
                gap-3
                "
              >
                <div
                  className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FaCoins className={item.color} />
                </div>

                <div>
                  <h3
                    className={`
                    text-3xl
                    font-black
                    ${item.color}
                    `}
                  >
                    {item.credits}
                  </h3>

                  <p className="text-slate-400">Credits</p>
                </div>
              </div>

              <div
                className="
                mt-6
                h-px
                bg-white/10
                "
              />

              <div className="mt-6">
                <p
                  className="
                  text-slate-400
                  text-sm
                  "
                >
                  Approximate Generations
                </p>

                <h4
                  className="
                  mt-2
                  text-2xl
                  font-bold
                  "
                >
                  {item.generations}
                </h4>

                <p
                  className="
                  mt-1
                  text-slate-500
                  "
                >
                  AI Note Generations
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}

        <div
          className="
          mt-10
          grid
          gap-5
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
            <FaBolt
              className="
              text-yellow-400
              text-2xl
              "
            />

            <h4
              className="
              mt-4
              font-bold
              "
            >
              Fast Processing
            </h4>

            <p
              className="
              mt-2
              text-slate-400
              text-sm
              "
            >
              Generate notes within seconds.
            </p>
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
            <FaBrain
              className="
              text-purple-400
              text-2xl
              "
            />

            <h4
              className="
              mt-4
              font-bold
              "
            >
              AI Optimized
            </h4>

            <p
              className="
              mt-2
              text-slate-400
              text-sm
              "
            >
              Exam-focused structured notes.
            </p>
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
            <FaCoins
              className="
              text-cyan-400
              text-2xl
              "
            />

            <h4
              className="
              mt-4
              font-bold
              "
            >
              No Expiry
            </h4>

            <p
              className="
              mt-2
              text-slate-400
              text-sm
              "
            >
              Credits remain available until used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
