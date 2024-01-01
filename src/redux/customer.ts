import { createSlice } from "@reduxjs/toolkit";

const customer = createSlice({
	name: "customer",
	initialState: {
		country: "",
		dob: "",
		firstName: "",
		lastName: "",
		name: "",
		phone: "",
	},
	reducers: {
		store(state, action) {
			state.country = action.payload.country;
			state.dob = action.payload.dob;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.name = action.payload.name;
			state.phone = action.payload.phone;
		},
		storeProfile(state, action) {
			state.country = action.payload.country;
			state.dob = action.payload.dob;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.name = action.payload.firstName + " " + action.payload.lastName;
			state.phone = state.phone;
		},
		storePhone(state, action) {
			state.phone = action.payload.phone;
		},
		delete(state) {
			state.country = "";
			state.dob = "";
			state.firstName = "";
			state.lastName = "";
			state.name = "";
			state.phone = "";
		},
	},
});

export const customerAction = customer.actions;
export default customer;
