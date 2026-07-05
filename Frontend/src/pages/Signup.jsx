import React, { useMemo, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaBookOpen,
  FaBrain,
  FaFilePdf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../App";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //console.log(import.meta.env.REACT_APP_API_URL);
      const response = await axios.post(`${base_url}/auth/signup`, formData, {
        withCredentials: true,
      });
      console.log("signup response : ", response);
      setLoading(false);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10 overflow-hidden relative">
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[180px] rounded-full" />
      </div>

      {/* Main Container */}

      <div
        className="
        relative
        max-w-6xl
        w-full
        grid
        lg:grid-cols-2
        rounded-[32px]
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-2xl
        "
      >
        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center p-12 border-r border-white/10 relative">
          <div className="absolute top-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

          <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            ExamNotes.Ai
          </h1>

          <h2 className="mt-8 text-4xl font-bold leading-tight">
            Study Smarter,
            <br />
            Not Harder.
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Generate AI-powered notes, summaries, MCQs and revision sheets in
            seconds.
          </p>

          <div className="mt-12 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaBookOpen className="text-purple-400 text-xl" />
              <div>
                <h3 className="font-semibold">AI Generated Notes</h3>
                <p className="text-sm text-gray-400">
                  Create concise study material instantly.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaBrain className="text-cyan-400 text-xl" />
              <div>
                <h3 className="font-semibold">Smart Summaries</h3>
                <p className="text-sm text-gray-400">
                  Important concepts extracted automatically.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaFilePdf className="text-red-400 text-xl" />
              <div>
                <h3 className="font-semibold">PDF Export</h3>
                <p className="text-sm text-gray-400">Download notes anytime.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="p-6 md:p-10 lg:p-12">
          {/* Mobile Logo */}

          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ExamNotes.Ai
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-black">Create Account</h2>

          <p className="text-gray-400 mt-3">
            Join thousands of students learning with AI.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Names */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  bg-slate-900/70
                  border
                  border-white/10
                  rounded-xl
                  outline-none
                  focus:border-purple-500
                  transition
                  "
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  bg-slate-900/70
                  border
                  border-white/10
                  rounded-xl
                  outline-none
                  focus:border-cyan-500
                  transition
                  "
                />
              </div>
            </div>

            {/* Email */}

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                pl-12
                pr-4
                py-4
                bg-slate-900/70
                border
                border-white/10
                rounded-xl
                outline-none
                focus:border-purple-500
                transition
                "
              />
            </div>

            {/* Password */}

            <div>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="
                  w-full
                  pl-12
                  pr-12
                  py-4
                  bg-slate-900/70
                  border
                  border-white/10
                  rounded-xl
                  outline-none
                  focus:border-cyan-500
                  transition
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              via-purple-500
              to-cyan-500
              font-semibold
              text-lg
              hover:scale-[1.02]
              transition
              shadow-xl
              shadow-purple-500/20
              flex
              items-center
              justify-center
              gap-2
              "
            >
              {loading ? (
                <div className="loader"></div>
              ) : (
                <div
                  className=" flex
              items-center
              justify-center
              gap-2"
                >
                  Sign Up <FaArrowRight />
                </div>
              )}
            </button>

            {/* Divider */}

            <div className="relative py-2">
              <div className="border-t border-white/10" />
            </div>

            {/* Google Button

            <button
              type="button"
              className="
              w-full
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              hover:bg-white/10
              transition
              "
            >
              Continue with Google
            </button> */}
          </form>

          {/* Footer */}

          <p className="text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
