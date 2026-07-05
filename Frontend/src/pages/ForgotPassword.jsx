import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AnimatedBackground from "../components/ForgotPassword/AnimatedBackground";
import ForgotHeader from "../components/ForgotPassword/ForgotHeader";
import StepIndicator from "../components/ForgotPassword/StepIndicator";
import EmailStep from "../components/ForgotPassword/EmailStep";
import OtpStep from "../components/ForgotPassword/OtpStep";
import PasswordStep from "../components/ForgotPassword/PasswordStep";
import SuccessStep from "../components/ForgotPassword/SuccessStep";
import { base_url } from "../App";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${base_url}/auth/sendOtp`,
        {
          email,
        },
        {
          withCredentials: true,
        },
      );

      toast.success("Verification code sent successfully.");

      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${base_url}/auth/verifyOtp`,
        {
          email,
          otp,
        },
        {
          withCredentials: true,
        },
      );

      toast.success("OTP verified successfully.");

      setStep(3);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      setLoading(true);

      await axios.post(
        `${base_url}/auth/resetPassword`,
        {
          email,
          newPassword,
          confirmPassword,
        },
        {
          withCredentials: true,
        },
      );

      toast.success("Password reset successfully.");

      setStep(4);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#020617]
      flex
      items-center
      justify-center
      px-5
      py-10
      "
    >
      {/* Animated Background */}

      <AnimatedBackground />

      {/* Decorative Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
      />

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        relative
        w-full
        max-w-lg
        rounded-[34px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* Gradient Border */}

        <div
          className="
          h-1
          bg-gradient-to-r
          from-purple-500
          via-fuchsia-500
          to-cyan-400
          "
        />

        <div className="p-8 md:p-10">
          {/* Header */}

          <ForgotHeader />

          {/* Step Indicator */}

          {step !== 4 && (
            <div className="mt-8 ml-16">
              <StepIndicator step={step} />
            </div>
          )}

          {/* Forms */}

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <EmailStep
                  email={email}
                  setEmail={setEmail}
                  loading={loading}
                  handleSubmit={handleSendOtp}
                />
              )}

              {step === 2 && (
                <OtpStep
                  otp={otp}
                  setOtp={setOtp}
                  loading={loading}
                  handleSubmit={handleVerifyOtp}
                  email={email}
                />
              )}

              {step === 3 && (
                <PasswordStep
                  loading={loading}
                  newPassword={newPassword}
                  confirmPassword={confirmPassword}
                  setNewPassword={setNewPassword}
                  setConfirmPassword={setConfirmPassword}
                  handleSubmit={handleResetPassword}
                />
              )}

              {step === 4 && <SuccessStep navigate={navigate} />}
            </AnimatePresence>
          </div>

          {/* Footer */}

          {step !== 4 && (
            <div
              className="
              mt-10
              border-t
              border-white/10
              pt-6
              text-center
              "
            >
              <p className="text-slate-400">Remember your password?</p>

              <button
                onClick={() => navigate("/login")}
                className="
                mt-3
                text-cyan-400
                hover:text-purple-400
                transition
                font-medium
                "
              >
                Back to Login →
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
