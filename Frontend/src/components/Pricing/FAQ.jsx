import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How many credits are required for one note generation?",
      answer:
        "Each AI note generation consumes 10 credits. This includes structured notes, revision points, MCQs, interview questions, diagrams and summaries.",
    },
    {
      question: "Do my credits expire?",
      answer:
        "No. Your purchased credits never expire and remain available in your account until used.",
    },
    {
      question: "Can I purchase additional credits later?",
      answer:
        "Yes. You can upgrade or purchase additional credit packs anytime from the pricing page.",
    },
    {
      question: "What happens if I run out of credits?",
      answer:
        "When your balance falls below 10 credits, note generation will be disabled until you purchase additional credits.",
    },
    {
      question: "Are payments secure?",
      answer:
        "Yes. All transactions are processed through secure razorpay payment gateways with encrypted communication.",
    },
    {
      question: "Can I use credits across different subjects?",
      answer:
        "Absolutely. Credits are not subject-specific. You can use them for any PDF, topic or subject.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

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
          border-cyan-500/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          text-cyan-300
          "
        >
          <FaQuestionCircle />
          Frequently Asked Questions
        </div>

        <h2
          className="
          mt-5
          text-4xl
          md:text-5xl
          font-black
          "
        >
          Got Questions?
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
          Everything you need to know about credits, note generation and
          purchasing plans.
        </p>
      </div>

      {/* FAQ List */}

      <div
        className="
        mt-14
        max-w-4xl
        mx-auto
        space-y-5
        "
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="
                flex
                w-full
                items-center
                justify-between
                p-6
                text-left
                "
            >
              <span
                className="
                  text-lg
                  font-semibold
                  "
              >
                {faq.question}
              </span>

              <motion.div
                animate={{
                  rotate: active === index ? 180 : 0,
                }}
              >
                <FaChevronDown />
              </motion.div>
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    overflow-hidden
                    "
                >
                  <div
                    className="
                      border-t
                      border-white/10
                      px-6
                      py-5
                      text-slate-400
                      leading-7
                      "
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom Card */}
    </section>
  );
}
