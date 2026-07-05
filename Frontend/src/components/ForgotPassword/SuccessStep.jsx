import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function SuccessStep({ navigate }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="text-center"
    >
      {/* Success Icon */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="relative mx-auto flex h-32 w-32 items-center justify-center"
      >
        {/* Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-full
          bg-green-500/20
          blur-3xl
          "
        />

        {/* Pulse Ring */}

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          absolute
          h-full
          w-full
          rounded-full
          border-2
          border-green-400/40
          "
        />

        <div
          className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-green-400
          to-emerald-500
          shadow-xl
          shadow-green-500/30
          "
        >
          <FaCheckCircle className="text-5xl text-white" />
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
        className="
        mt-8
        text-4xl
        font-black
        bg-gradient-to-r
        from-green-400
        via-cyan-400
        to-purple-400
        bg-clip-text
        text-transparent
        "
      >
        Password Updated!
      </motion.h2>

      {/* Description */}

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
          delay: 0.4,
        }}
        className="
        mt-5
        text-slate-400
        leading-8
        "
      >
        Your password has been successfully changed.
        <br />
        You can now login securely using your new password.
      </motion.p>

      {/* Success Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
        className="
        mt-8
        rounded-3xl
        border
        border-green-500/20
        bg-green-500/10
        p-5
        "
      >
        <p className="text-green-300">
          ✓ Your account is now protected with the new password.
        </p>
      </motion.div>

      {/* Countdown */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className="
        mt-8
        text-sm
        text-slate-500
        "
      >
        Redirecting to Login in
        <span className="ml-1 font-semibold text-cyan-400">5 seconds...</span>
      </motion.p>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() => navigate("/login")}
        className="
        mt-8
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        via-fuchsia-500
        to-cyan-500
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-purple-500/20
        transition
        "
      >
        Go To Login
        <FaArrowRight />
      </motion.button>
    </motion.div>
  );
}
