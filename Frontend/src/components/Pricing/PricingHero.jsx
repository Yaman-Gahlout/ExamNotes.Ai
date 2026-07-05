import { motion } from "framer-motion";
import { FaCoins, FaBolt, FaFilePdf, FaArrowRight } from "react-icons/fa";

export default function PricingHero() {
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
      md:p-12
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-32
        -left-32
        h-96
        w-96
        rounded-full
        bg-purple-600/20
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        -bottom-32
        -right-32
        h-96
        w-96
        rounded-full
        bg-cyan-500/20
        blur-[150px]
        "
      />

      <div
        className="
        relative
        z-10
        grid
        gap-12
        lg:grid-cols-2
        items-center
        "
      >
        {/* LEFT */}

        <div>
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
            <FaCoins />
            Credit Based System
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
            mt-6
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            Purchase Credits
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
              Unlock Learning
            </span>
          </motion.h1>

          {/* Description */}

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
            mt-6
            text-lg
            leading-8
            text-slate-400
            max-w-xl
            "
          >
            Every note generation consumes credits. Purchase credit packs and
            continue generating exam-oriented notes, MCQs, revision sheets,
            diagrams, flowcharts and interview questions.
          </motion.p>

          {/* Info Cards */}

          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-4
            "
          >
            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              "
            >
              <p className="text-sm text-slate-400">Minimum Required</p>

              <h3 className="text-xl font-bold text-cyan-300">10 Credits</h3>
            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              "
            >
              <p className="text-sm text-slate-400">PDF Processing</p>

              <h3 className="text-xl font-bold text-purple-300">AI Powered</h3>
            </div>
          </div>

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
            className="
            mt-8
            flex
            items-center
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
            onClick={() => scrollToSection("pricing-card")}
          >
            Buy Credits
            <FaArrowRight />
          </motion.button>
        </div>

        {/* RIGHT */}

        <div className="relative h-[450px]">
          {/* Card 1 */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            top-0
            left-0
            w-72
            rounded-[30px]
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
                bg-purple-500/20
                flex
                items-center
                justify-center
                "
              >
                <FaCoins />
              </div>

              <div>
                <h3 className="font-bold">Starter Pack</h3>

                <p className="text-slate-400 text-sm">150 Credits</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            top-32
            right-0
            w-80
            rounded-[30px]
            border
            border-purple-500/20
            bg-gradient-to-br
            from-purple-600/20
            to-cyan-500/20
            backdrop-blur-xl
            p-7
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                h-14
                w-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
                "
              >
                <FaBolt />
              </div>

              <div>
                <h3 className="font-bold text-xl">Most Popular</h3>

                <p className="text-slate-300">350 Credits</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-0
            left-12
            w-72
            rounded-[30px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                h-12
                w-12
                rounded-2xl
                bg-cyan-500/20
                flex
                items-center
                justify-center
                "
              >
                <FaFilePdf />
              </div>

              <div>
                <h3 className="font-bold">Ultimate Pack</h3>

                <p className="text-slate-400 text-sm">1000 Credits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
