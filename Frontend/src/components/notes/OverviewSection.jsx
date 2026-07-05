import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaLightbulb,
  FaBrain,
  FaStar,
  FaBolt,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function OverviewSection({ notes }) {
  return (
    <div className="space-y-12">
      {/* ================= Learning Objectives ================= */}

      {notes?.learningObjectives?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <FaBookOpen />
            </div>

            <h2 className="text-3xl font-bold">Learning Objectives</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {notes.learningObjectives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <div className="flex gap-4">
                  <div className="text-green-400 text-xl">✓</div>

                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Definitions ================= */}

      {notes?.definitions?.length > 0 && (
        <section id="definitions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <FaLightbulb />
            </div>

            <h2 className="text-3xl font-bold">Important Definitions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {notes.definitions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-slate-900
                  to-slate-800
                "
              >
                <div className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500" />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-300">
                    {item.term}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.meaning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Key Concepts ================= */}

      {notes?.keyConcepts?.length > 0 && (
        <section id="concepts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <FaBrain />
            </div>

            <h2 className="text-3xl font-bold">Key Concepts</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {notes.keyConcepts.map((concept, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500/10
                  to-cyan-500/10
                  border
                  border-purple-500/20
                  font-medium
                "
              >
                {concept}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Important Points ================= */}

      {notes?.importantPoints?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
              <FaStar />
            </div>

            <h2 className="text-3xl font-bold">Important Exam Points</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {notes.importantPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 5,
                }}
                className="
                  rounded-2xl
                  border-l-4
                  border-yellow-400
                  bg-yellow-500/5
                  border-t
                  border-r
                  border-b
                  border-white/10
                  p-5
                "
              >
                <div className="flex gap-3">
                  <span className="text-yellow-400">⭐</span>

                  <p className="text-slate-300">
                    <ReactMarkdown>{point}</ReactMarkdown>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= Revision Notes ================= */}

      {notes?.revisionNotes?.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
              <FaBolt />
            </div>

            <h2 className="text-3xl font-bold">Quick Revision</h2>
          </div>

          <div className="space-y-4">
            {notes.revisionNotes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.01,
                }}
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500/5
                  to-purple-500/5
                  border
                  border-white/10
                  p-5
                "
              >
                <div className="flex gap-3">
                  <span className="text-cyan-400">⚡</span>

                  <p className="leading-7 text-slate-300">
                    <ReactMarkdown>{item}</ReactMarkdown>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
