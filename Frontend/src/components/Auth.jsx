import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null; // prevent component from rendering
  }

  return children;
}

export default Auth;
