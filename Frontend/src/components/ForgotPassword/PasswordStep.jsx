import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function PasswordStep({
  loading,
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  handleSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const checks = useMemo(
    () => ({
      length: newPassword.length >= 8,
      upper: /[A-Z]/.test(newPassword),
      lower: /[a-z]/.test(newPassword),
      number: /\d/.test(newPassword),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    }),
    [newPassword],
  );

  const strength = Object.values(checks).filter(Boolean).length;

  const strengthText = [
    "Very Weak",
    "Weak",
    "Fair",
    "Good",
    "Strong",
    "Excellent",
  ][strength];

  const strengthColor = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-cyan-500",
    "bg-green-500",
  ][strength];

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
        <h2 className="text-2xl font-bold text-white">Create New Password</h2>

        <p className="mt-3 text-slate-400 leading-7">
          Choose a secure password to protect your ExamNotes AI account.
        </p>
      </div>

      {/* Password */}

      <div>
        <label className="mb-3 block text-slate-300">New Password</label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            pr-14
            text-white
            outline-none
            backdrop-blur-xl
            focus:border-cyan-400
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-cyan-400
            "
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Strength */}

      <div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Password Strength</span>

          <span className="font-semibold text-cyan-400">{strengthText}</span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: `${strength * 20}%`,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`h-full ${strengthColor}`}
          />
        </div>
      </div>

      {/* Confirm */}

      <div>
        <label className="mb-3 block text-slate-300">Confirm Password</label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            pr-14
            text-white
            outline-none
            backdrop-blur-xl
            focus:border-cyan-400
            "
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-cyan-400
            "
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {confirmPassword.length > 0 && (
          <p
            className={`mt-3 text-sm ${
              confirmPassword === newPassword
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {confirmPassword === newPassword
              ? "✓ Passwords match"
              : "✗ Passwords do not match"}
          </p>
        )}
      </div>

      {/* Requirements */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <h4 className="mb-4 font-semibold text-white">Password Requirements</h4>

        <div className="space-y-3">
          {[
            [checks.length, "Minimum 8 characters"],
            [checks.upper, "One uppercase letter"],
            [checks.lower, "One lowercase letter"],
            [checks.number, "One number"],
            [checks.special, "One special character"],
          ].map(([valid, text]) => (
            <div key={text} className="flex items-center gap-3">
              {valid ? (
                <FaCheckCircle className="text-green-400" />
              ) : (
                <FaTimesCircle className="text-slate-500" />
              )}

              <span className={valid ? "text-green-300" : "text-slate-400"}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        disabled={loading || confirmPassword !== newPassword || strength < 5}
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
            Resetting Password...
          </>
        ) : (
          <>
            Reset Password
            <FaArrowRight />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
