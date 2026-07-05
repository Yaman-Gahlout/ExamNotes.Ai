import { motion } from "framer-motion";
import { HiOutlineShieldCheck } from "react-icons/hi";

export default function ForgotHeader() {
  return (
    <div className="text-center">
      {/* Logo */}

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className="
        mx-auto
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-[28px]
        bg-gradient-to-br
        from-purple-600
        via-fuchsia-500
        to-cyan-500
        shadow-lg
        shadow-purple-500/20
        "
      >
        <HiOutlineShieldCheck size={42} className="text-white" />
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
        className="
        mt-7
        text-4xl
        font-black
        bg-gradient-to-r
        from-purple-400
        via-fuchsia-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        Forgot Password
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
        mt-4
        text-slate-400
        leading-7
        "
      >
        Verify your identity and securely reset your password to continue
        learning with ExamNotes AI.
      </motion.p>
    </div>
  );
}
