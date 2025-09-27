import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tabs } from "../utils/utils";
import { reset } from "./resetSlice";

export type vitalInfoState = {
  activeTab: string;
};
const initialState: vitalInfoState = {
  activeTab: Tabs[0],
};
const vitalInfoSlice = createSlice({
  name: "vitalInfo",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => initialState); // Handle the reset action
    // ... handle other actions if necessary ...
  },
});
export const { setActiveTab } = vitalInfoSlice.actions;
export default vitalInfoSlice.reducer;
