import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tabs } from "../utils/utils";
import { reset } from "./resetSlice";

export type vitalInfoState = {
  activeTab: string;
  isMenuOpen: boolean;
  isMobile: boolean;
};
const initialState: vitalInfoState = {
  activeTab: Tabs[0],
  isMenuOpen: false,
  isMobile: false,
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
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => initialState); // Handle the reset action
    // ... handle other actions if necessary ...
  },
});
export const { setActiveTab, setIsMenuOpen, setIsMobile } =
  vitalInfoSlice.actions;
export default vitalInfoSlice.reducer;
