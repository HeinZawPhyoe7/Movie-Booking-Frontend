import { configureStore } from "@reduxjs/toolkit";
import createMovieSlice from "@/features/movies/CreateMovieSlice";

const store = configureStore({
  reducer: {
    createMovie: createMovieSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
