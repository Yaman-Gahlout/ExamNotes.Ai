import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function OtpStep({ otp, setOtp, loading, handleSubmit, email }) {
  const inputRefs = useRef([]);

  //const [timeLeft, setTimeLeft] = useState(60 * 10);

  //   useEffect(() => {
  //     if (timeLeft === 0) return;

  //     const timer = setInterval(() => {
  //       setTimeLeft((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, [timeLeft]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const otpArray = otp.split("");

    otpArray[index] = value;

    const newOtp = otpArray.join("");

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").trim().slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    setOtp(pasted);

    pasted.split("").forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Heading */}

      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Verify Email</h2>

        <p className="mt-3 text-slate-400 leading-7">
          We've sent a verification code to
        </p>

        <p className="mt-1 font-semibold text-cyan-400 break-all">{email}</p>
      </div>

      {/* OTP */}

      <div onPaste={handlePaste} className="flex justify-center gap-3">
        {[...Array(6)].map((_, index) => (
          <motion.input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            defaultValue={otp[index] || ""}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            whileFocus={{
              scale: 1.08,
            }}
            className="
            h-14
            w-14
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-center
            text-xl
            font-bold
            text-white
            backdrop-blur-xl
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-400/30
            "
          />
        ))}
      </div>

      {/* Timer */}

      <div className="text-center">
        <p className="text-slate-400 text-sm">
          OTP is valid only for 10 mintues.
        </p>
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
        <p className="text-center text-sm leading-6 text-cyan-200">
          Enter the 6-digit verification code. You can also paste the entire
          OTP.
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
        disabled={loading || otp.length !== 6}
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
        disabled:opacity-50
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
            Verifying...
          </>
        ) : (
          <>
            Verify OTP
            <FaArrowRight />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
