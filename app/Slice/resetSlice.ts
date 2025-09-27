import { createAction } from "@reduxjs/toolkit";

// Define a reset action that can be handled by all slices
export const reset = createAction("reset");
