import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaQuestionCircle,
  FaGraduationCap,
  FaBriefcase,
  FaBolt,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function PracticeSection({ notes }) {
  const [revealed, setRevealed] = useState({});

  const toggleAnswer = (index) => {
    setRevealed((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-14">
      {/* ================= MCQs ================= */}

      {notes?.examQuestions?.mcqs?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FaQuestionCircle className="text-purple-400 text-3xl" />

            <h2 className="text-3xl font-bold">Practice MCQs</h2>
          </div>

          <div className="space-y-6">
            {notes.examQuestions.mcqs.map((mcq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <h3 className="font-semibold text-lg">
                  Q{index + 1}. {mcq.question}
                </h3>

                <div className="grid md:grid-cols-2 gap-3 mt-6">
                  {mcq.options?.map((option, i) => (
                    <div
                      key={i}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-slate-900
                        p-3
                      "
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => toggleAnswer(index)}
                  className="
                    mt-5
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    px-5
                    py-2
                    font-medium
                  "
                >
                  {revealed[index] ? "Hide Answer" : "Show Answer"}
                </button>

                {revealed[index] && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-green-500/20
                      bg-green-500/10
                      p-4
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FaCheckCircle className="text-green-400" />

                    <span>
                      Correct Answer:
                      <strong className="ml-2">{mcq.answer}</strong>
                    </span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Short Questions ================= */}

      {notes?.examQuestions?.shortQuestions?.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6">Short Questions</h2>

          <div className="grid gap-4">
            {notes.examQuestions.shortQuestions.map((question, index) => (
              <div
                key={index}
                className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
              >
                {index + 1}. {question}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Long Questions ================= */}

      {notes?.examQuestions?.longQuestions?.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6">Long Questions</h2>

          <div className="space-y-4">
            {notes.examQuestions.longQuestions.map((question, index) => (
              <div
                key={index}
                className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
              >
                {index + 1}. {question}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Viva ================= */}

      {notes?.examQuestions?.vivaQuestions?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="text-cyan-400 text-3xl" />

            <h2 className="text-3xl font-bold">Viva Questions</h2>
          </div>

          <div className="grid gap-4">
            {notes.examQuestions.vivaQuestions.map((question, index) => (
              <div
                key={index}
                className="
                    rounded-2xl
                    bg-cyan-500/5
                    border
                    border-cyan-500/20
                    p-5
                  "
              >
                🎤 {question}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Interview ================= */}

      {notes?.examQuestions?.interviewQuestions?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-purple-400 text-3xl" />

            <h2 className="text-3xl font-bold">Interview Questions</h2>
          </div>

          <div className="grid gap-4">
            {notes.examQuestions.interviewQuestions.map((question, index) => (
              <div
                key={index}
                className="
                    rounded-2xl
                    bg-purple-500/5
                    border
                    border-purple-500/20
                    p-5
                  "
              >
                💼 {question}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Last Minute Revision ================= */}

      {notes?.lastMinuteRevision?.length > 0 && (
        <section>
          <div
            id="revision"
            className="
              rounded-[32px]
              border
              border-yellow-500/20
              bg-gradient-to-r
              from-yellow-500/10
              to-orange-500/10
              p-8
            "
          >
            <div className="flex items-center gap-3 mb-5">
              <FaBolt className="text-yellow-400 text-3xl" />

              <h2 className="text-3xl font-bold">Last Minute Revision</h2>
            </div>

            <div className="space-y-4">
              {notes.lastMinuteRevision.map((item, index) => (
                <div
                  key={index}
                  className="
                      rounded-xl
                      bg-white/5
                      p-4
                      flex gap-2
                    "
                >
                  ⚡ <ReactMarkdown>{item}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
