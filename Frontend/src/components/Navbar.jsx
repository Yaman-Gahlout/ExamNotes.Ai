import React from "react";
import creadits from "../assets/diamond.png";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../App";
import { setUserData } from "../redux/slices/user.slice";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRobot,
  FaBook,
  FaBrain,
  FaFilePdf,
  FaArrowRight,
  FaHome,
  FaCogs,
  FaSignInAlt,
} from "react-icons/fa";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar({ isUpload }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useGetCurrentUser();

  const logoutHandler = async () => {
    try {
      await axios.get(`${base_url}/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logout successfully");
      localStorage.removeItem("token");
      dispatch(setUserData(null));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="sticky top-0 z-50">
      {/* Glass Navbar */}

      <div
        className="
              backdrop-blur-2xl
              bg-slate-950/70
              border-b
              border-white/10
              "
      >
        <div
          className="
                max-w-350
                mx-auto
                px-5
                md:px-10
                py-4
                flex
                justify-between
                items-center
                "
        >
          {/* Logo */}

          <div className="group cursor-pointer">
            <h1
              onClick={() => navigate("/home")}
              className="
                    text-2xl
                    md:text-3xl
                    font-black
                    bg-gradient-to-r
                    from-purple-500
                    via-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                    "
            >
              ExamNotes.Ai
            </h1>

            <div
              className="
                    h-[2px]
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-400
                    scale-x-0
                    group-hover:scale-x-100
                    transition
                    duration-300
                    "
            />
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">
            <a
              onClick={() => navigate("/home")}
              className="
                      relative
                      text-gray-300
                      hover:text-white
                      transition
                      group
                      cursor-pointer
                      "
            >
              Home
              <span
                className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[2px]
                        bg-cyan-400
                        group-hover:w-full
                        transition-all
                        duration-300
                        "
              />
            </a>

            <a
              onClick={() =>
                isUpload ? navigate("/history") : navigate("/upload")
              }
              className="
                      relative
                      text-gray-300
                      hover:text-white
                      transition
                      group
                      cursor-pointer
                      "
            >
              {isUpload ? "History" : "Upload"}
              <span
                className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[2px]
                        bg-cyan-400
                        group-hover:w-full
                        transition-all
                        duration-300
                        "
              />
            </a>

            <div
              onClick={() => navigate("/pricing")}
              className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-2
              cursor-pointer"
            >
              <img src={creadits} alt="Creadits" className="w-6 h-6" />
              {userData?.credits}
            </div>

            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center justify-center border border-white/10 rounded-full h-10 w-10 text-xl cursor-pointer hover:border-cyan-400 transition"
              >
                {userData?.name.charAt(0).toUpperCase()}
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-6 w-48 bg-slate-900/95 backdrop-blur-2xl border border-slate-700 rounded-3xl shadow-2xl z-50">
                  <div className="p-4 border-b border-slate-800">
                    <h3 className="font-semibold text-white">
                      {userData?.name}
                    </h3>
                  </div>
                  <div className="p-2 space-y-2">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-slate-800 rounded-xl transition text-red-500 cursor-pointer"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        logoutHandler();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
                  md:hidden
                  w-11
                  h-11
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  "
          >
            {menuOpen ? (
              <FaTimes className="text-cyan-400" />
            ) : (
              <FaBars className="text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}

      {menuOpen && (
        <div
          className="
              absolute
              top-20
              right-4
              w-72
              bg-slate-900/95
              backdrop-blur-2xl
              border
              border-slate-700
              rounded-3xl
              shadow-2xl
              shadow-purple-500/10
              overflow-hidden
              md:hidden
              z-50
              "
        >
          {/* Header */}

          <div className="px-5 py-4 border-b border-slate-800">
            <h3 className="font-semibold text-white">{userData?.name}</h3>

            <p className="text-xs text-gray-400 mt-1">Explore ExamNotes AI</p>
          </div>

          {/* Menu Links */}

          <div className="p-3 space-y-2">
            <a
              onClick={() => navigate("/home")}
              className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-slate-800
                  transition
                  "
            >
              <FaHome className="text-cyan-400" />
              <span>Home</span>
            </a>

            <a
              onClick={() =>
                isUpload ? navigate("/history") : navigate("/upload")
              }
              className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-slate-800
                  transition
                  "
            >
              <FaCogs className="text-purple-400" />
              <span>{isUpload ? "History" : "Upload"}</span>
            </a>
          </div>

          <div
            onClick={() => navigate("/pricing")}
            className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-2 mb-4 mx-4 cursor-pointer"
          >
            <img src={creadits} alt="Creadits" className="w-6 h-6" />
            {userData?.credits}
          </div>

          {/* Divider */}

          <div className="border-t border-slate-800" />

          {/* Auth Buttons */}

          <div className="p-4 space-y-3">
            <button
              className="
                  w-full
                  py-3
                  rounded-xl
                  border
                  border-red-500
                  hover:bg-red-500
                  hover:text-gray-200
                  transition-all
                  duration-200
                  cursor-pointer
                  text-red-500
                  "
              onClick={() => {
                setMenuOpen(false);
                logoutHandler();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
