import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllNotesData, setUserData } from "../redux/slices/user.slice";
import { toast } from "react-toastify";
import { base_url } from "../App";

function useGetMyNotes() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${base_url}/notes`, {
          withCredentials: true,
        });
        setResponse(res);
        setLoading(false);
        console.log("All Notes ", res);
        dispatch(setAllNotesData(res.data.notes));
      } catch (err) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return { response, loading };
}

export default useGetMyNotes;
