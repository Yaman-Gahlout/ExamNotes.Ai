import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaBrain,
  FaBookOpen,
  FaFilePdf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../App";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
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

    try {
      //console.log(import.meta.env.REACT_APP_API_URL);
      setLoading(true);
      const response = await axios.post(`${base_url}/auth/login`, formData, {
        withCredentials: true,
      });
      console.log(response);
      setLoading(false);
      toast.success("Login successful!");
      localStorage.setItem("token", response.data.token);
      console.log("token in localstorage : ", localStorage.getItem("token"));
      navigate("/home");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Glow */}

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

        <div className="hidden lg:flex flex-col justify-center p-12 border-r border-white/10">
          <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            ExamNotes.Ai
          </h1>

          <h2 className="mt-8 text-4xl font-bold leading-tight">
            Welcome Back
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Continue your learning journey with AI-powered notes, summaries and
            revision sheets.
          </p>

          <div className="mt-12 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaBookOpen className="text-purple-400 text-xl" />
              <span>Generate Smart Notes</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaBrain className="text-cyan-400 text-xl" />
              <span>AI Powered Summaries</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <FaFilePdf className="text-red-400 text-xl" />
              <span>Export Notes as PDF</span>
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

          <h2 className="text-3xl md:text-4xl font-black">Welcome Back</h2>

          <p className="text-gray-400 mt-3">
            Login to continue generating AI-powered notes.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

            {/* Forgot Password */}

            <div className="flex justify-end">
              <button
                type="button"
                className="
                text-sm
                text-cyan-400
                hover:text-cyan-300
                "
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
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
                <div className="loader" />
              ) : (
                <div
                  className="flex
              items-center
              justify-center
              gap-2"
                >
                  Login <FaArrowRight />
                </div>
              )}
            </button>

            {/* Divider */}

            <div className="relative py-2">
              <div className="border-t border-white/10" />
            </div>

            {/* Google Login

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

          {/* Signup Link */}

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
