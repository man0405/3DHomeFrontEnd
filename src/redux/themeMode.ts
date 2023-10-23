import { createSlice } from "@reduxjs/toolkit";

const themeMode = createSlice({
	name: "theme",
	initialState: { theme: true },
	reducers: {
		toggle(state) {
			state.theme = !state.theme;
		},
		set(state, action) {
			state.theme = action.payload.theme;
		},
	},
});

export const themeAction = themeMode.actions;
export default themeMode;
