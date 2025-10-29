import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reset } from "./resetSlice";

export type vitalInfoState = {
  activeTab: string;
  isMenuOpen: boolean;
  isMobile: boolean;
  gameScore: number;
};
const initialState: vitalInfoState = {
  activeTab: "_hello",
  isMenuOpen: false,
  isMobile: false,
  gameScore: 0,
};
const vitalInfoSlice = createSlice({
  name: "vitalInfo",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setGameScore: (state, action: PayloadAction<number>) => {
      state.gameScore = action.payload;
    },
    resetGameScore: (state) => {
      state.gameScore = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => initialState); // Handle the reset action
    // ... handle other actions if necessary ...
  },
});
export const { setActiveTab, setIsMenuOpen, setIsMobile, setGameScore, resetGameScore } =
  vitalInfoSlice.actions;
export default vitalInfoSlice.reducer;
