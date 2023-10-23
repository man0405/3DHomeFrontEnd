import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./themeMode";

const store = configureStore({
	reducer: { theme: themeMode.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
