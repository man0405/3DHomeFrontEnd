import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: { email: null, password: null },
	reducers: {
		store(state, action) {
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
		delete(state) {
			state.email = null;
			state.password = null;
		},
	},
});

export const userAction = user.actions;
export default user;
