import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./themeMode";
import user from "./user";

const store = configureStore({
	reducer: { theme: themeMode.reducer, user: user.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
