import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaCode,
  FaProjectDiagram,
  FaCalculator,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import MermaidDiagram from "../MermaidDiagram";

export default function DetailedNotesSection({ notes }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!notes?.detailedNotes || notes.detailedNotes.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      {/* Heading */}

      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          <FaBook />
          AI Generated Explanation
        </span>

        <h2 className="mt-4 text-4xl font-black">Detailed Notes</h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          Expand each section to understand the topic in depth with examples,
          diagrams, formulas, and structured explanations.
        </p>
      </div>

      {/* Accordion */}

      <div className="space-y-5">
        {notes.detailedNotes.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-br
                from-slate-900/90
                to-slate-800/60
                backdrop-blur-xl
              "
            >
              {/* Header */}

              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                "
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-400"></p>

                  <h3 className="mt-2 text-xl font-bold">{item.heading}</h3>
                </div>

                <div className="text-xl text-slate-400">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {/* Body */}

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="border-t border-white/10 p-6">
                      {/* Main Content */}

                      <div className="rounded-2xl bg-white/5 p-5">
                        <p className="leading-8 text-slate-300 whitespace-pre-line">
                          <ReactMarkdown>{item.content}</ReactMarkdown>
                        </p>
                      </div>

                      {/* Example */}

                      {item.example && (
                        <div
                          className="
                            mt-6
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/5
                            p-5
                          "
                        >
                          <div className="flex items-center gap-3">
                            <FaCode className="text-cyan-400" />

                            <h4 className="font-semibold">Example</h4>
                          </div>

                          <p className="mt-4 whitespace-pre-line text-slate-300">
                            {item.example}
                          </p>
                        </div>
                      )}

                      {/* Formula */}

                      {item.formula && (
                        <div
                          className="
                            mt-6
                            rounded-2xl
                            border
                            border-purple-500/20
                            bg-purple-500/5
                            p-5
                          "
                        >
                          <div className="flex items-center gap-3">
                            <FaCalculator className="text-purple-400" />

                            <h4 className="font-semibold">Formula</h4>
                          </div>

                          <pre className="mt-4 overflow-auto rounded-xl bg-slate-950 p-4 text-cyan-300">
                            {item.formula}
                          </pre>
                        </div>
                      )}

                      {/* Diagram */}

                      {item.diagram && (
                        <div
                          className="
                            mt-6
                            rounded-2xl
                            border
                            border-green-500/20
                            bg-green-500/5
                            p-5
                          "
                        >
                          <div className="flex items-center gap-3">
                            <FaProjectDiagram className="text-green-400" />

                            <h4 className="font-semibold">Diagram</h4>
                          </div>

                          {/* Later replace with Mermaid renderer */}

                          <pre className="mt-4 overflow-auto rounded-xl bg-slate-950 p-4 text-green-300 whitespace-pre-wrap">
                            <MermaidDiagram
                              chart={item.diagram}
                            ></MermaidDiagram>
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
