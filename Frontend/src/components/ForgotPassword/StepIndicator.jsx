import { motion } from "framer-motion";
import { FaEnvelope, FaKey, FaLock } from "react-icons/fa";

export default function StepIndicator({ step }) {
  const steps = [
    {
      id: 1,
      title: "Email",
      icon: FaEnvelope,
    },
    {
      id: 2,
      title: "Verify",
      icon: FaKey,
    },
    {
      id: 3,
      title: "Reset",
      icon: FaLock,
    },
  ];

  return (
    <div className="flex items-center justify-between">
      {steps.map((item, index) => {
        const Icon = item.icon;

        const active = step >= item.id;

        return (
          <div
            key={item.id}
            className="
            flex
            flex-1
            items-center
            "
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: active ? 1 : 0.9,
                }}
                className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                transition-all
                duration-300

                ${
                  active
                    ? "border-purple-500 bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20"
                    : "border-white/10 bg-white/5 text-slate-500"
                }
                `}
              >
                <Icon size={18} />
              </motion.div>

              <span
                className={`
                mt-3
                text-xs
                font-medium

                ${active ? "text-cyan-300" : "text-slate-500"}
                `}
              >
                {item.title}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className="
                mx-3
                mt-[-22px]
                h-[3px]
                flex-1
                rounded-full
                bg-white/10
                overflow-hidden
                "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: step > item.id ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                  h-full
                  bg-gradient-to-r
                  from-purple-500
                  to-cyan-400
                  "
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
