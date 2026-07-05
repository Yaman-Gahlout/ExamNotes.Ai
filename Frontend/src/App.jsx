import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./components/Auth";
import Upload from "./pages/Upload";
import Notes from "./pages/Notes";
import History from "./pages/History";
import Pricing from "./pages/Pricing";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/home"
        element={
          <Auth>
            <Home />
          </Auth>
        }
      />
      <Route
        path="/upload"
        element={
          <Auth>
            <Upload />
          </Auth>
        }
      />

      <Route
        path="/notes"
        element={
          <Auth>
            <Notes />
          </Auth>
        }
      />

      <Route
        path="/history"
        element={
          <Auth>
            <History />
          </Auth>
        }
      />

      <Route
        path="/pricing"
        element={
          <Auth>
            <Pricing />
          </Auth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
export const base_url = "http://localhost:9000";
export default App;
