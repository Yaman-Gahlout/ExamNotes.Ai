import { motion } from "framer-motion";
import {
  FaBrain,
  FaFileAlt,
  FaQuestionCircle,
  FaProjectDiagram,
  FaFilePdf,
  FaRocket,
} from "react-icons/fa";

export default function PricingFeatures() {
  const features = [
    {
      icon: FaBrain,
      title: "AI Generated Notes",
      description:
        "Generate structured and exam-focused notes from any PDF instantly.",
      color: "text-purple-400",
    },
    {
      icon: FaFileAlt,
      title: "Revision Sheets",
      description: "Quick revision notes and last-minute preparation material.",
      color: "text-cyan-400",
    },
    {
      icon: FaQuestionCircle,
      title: "MCQs & Answers",
      description: "Practice important MCQs with answers and explanations.",
      color: "text-green-400",
    },
    {
      icon: FaProjectDiagram,
      title: "Diagrams & Flowcharts",
      description:
        "Visual learning with diagrams and easy-to-understand flowcharts.",
      color: "text-yellow-400",
    },
    {
      icon: FaRocket,
      title: "Interview Questions",
      description:
        "Important viva and interview questions generated automatically.",
      color: "text-pink-400",
    },
    {
      icon: FaFilePdf,
      title: "PDF Export",
      description:
        "Download beautifully formatted notes as PDF for offline study.",
      color: "text-orange-400",
    },
  ];

  return (
    <section>
      {/* Header */}

      <div className="text-center">
        <div
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
          Premium Features
        </div>

        <h2
          className="
          mt-5
          text-4xl
          md:text-5xl
          font-black
          "
        >
          Everything Included
        </h2>

        <p
          className="
          mt-4
          max-w-3xl
          mx-auto
          text-slate-400
          text-lg
          leading-8
          "
        >
          Every credit package unlocks powerful AI features designed to help
          students learn faster, revise smarter and score better.
        </p>
      </div>

      {/* Features Grid */}

      <div
        className="
        mt-14
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
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
              p-7
              "
            >
              {/* Hover Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
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

              {/* Icon */}

              <div
                className="
                relative
                z-10
                "
              >
                <div
                  className="
                  h-16
                  w-16
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon
                    className={`
                    text-3xl
                    ${feature.color}
                    `}
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  mt-4
                  text-slate-400
                  leading-7
                  "
                >
                  {feature.description}
                </p>

                {/* Bottom */}

                <div
                  className="
                  mt-6
                  h-px
                  bg-white/10
                  "
                />

                <p
                  className="
                  mt-5
                  text-sm
                  text-cyan-300
                  "
                >
                  Included in all plans
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
