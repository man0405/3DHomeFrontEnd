import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./themeMode";
import user from "./user";
import customer from "./customer";

const store = configureStore({
	reducer: {
		theme: themeMode.reducer,
		user: user.reducer,
		customer: customer.reducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
