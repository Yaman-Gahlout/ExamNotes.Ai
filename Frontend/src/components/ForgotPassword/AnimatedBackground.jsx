import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Purple Blob */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-28
        -left-24
        h-[420px]
        w-[420px]
        rounded-full
        bg-purple-600/20
        blur-[170px]
        "
      />

      {/* Cyan Blob */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -90, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -bottom-28
        -right-24
        h-[420px]
        w-[420px]
        rounded-full
        bg-cyan-500/20
        blur-[170px]
        "
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[300px]
        w-[300px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-fuchsia-500/10
        blur-[130px]
        "
      />
    </div>
  );
}
