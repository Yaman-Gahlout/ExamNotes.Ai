import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function EmailStep({ email, setEmail, loading, handleSubmit }) {
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -25,
      }}
      transition={{
        duration: 0.4,
      }}
      className="space-y-8"
    >
      {/* Heading */}

      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Verify Your Email</h2>

        <p className="mt-3 text-slate-400 leading-7">
          Enter your registered email address. We'll send a verification code to
          securely reset your password.
        </p>
      </div>

      {/* Email */}

      <div>
        <label className="mb-3 block font-medium text-slate-300">
          Email Address
        </label>

        <div className="group relative">
          {/* Glow */}

          <div
            className="
            absolute
            -inset-[1px]
            rounded-2xl
            bg-gradient-to-r
            
            opacity-0
            blur
            transition
            duration-300
            group-focus-within:opacity-100
            "
          />

          <div
            className="
            relative
            flex
            items-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            "
          >
            <div className="px-5 text-cyan-400">
              <MdEmail size={24} />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="
              w-full
              bg-transparent
              py-4
              pr-5
              pl-2
              text-white
              outline-none
              placeholder:text-slate-500
              "
            />
          </div>
        </div>
      </div>

      {/* Info */}

      <div
        className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-cyan-500/10
        p-4
        "
      >
        <p className="text-sm leading-6 text-cyan-200">
          A 6-digit verification code will be sent to your registered email. The
          code is valid for a limited time only.
        </p>
      </div>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        disabled={loading}
        type="submit"
        className="
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
        disabled:cursor-not-allowed
        disabled:opacity-70
        "
      >
        {loading ? (
          <>
            <div
              className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-white
              border-t-transparent
              "
            />
            Sending OTP...
          </>
        ) : (
          <>
            Send Verification Code
            <FaArrowRight />
          </>
        )}
      </motion.button>

      {/* Bottom */}

      <p className="text-center text-sm text-slate-500">
        Make sure you enter the email associated with your account.
      </p>
    </motion.form>
  );
}
