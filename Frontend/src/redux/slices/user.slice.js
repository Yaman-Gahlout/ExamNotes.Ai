import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    notes: null,
    allNotes: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setNotesData: (state, action) => {
      state.notes = action.payload;
    },
    setAllNotesData: (state, action) => {
      state.allNotes = action.payload;
    },
  },
});

export const { setUserData, setNotesData, setAllNotesData } = userSlice.actions;
export default userSlice.reducer;
