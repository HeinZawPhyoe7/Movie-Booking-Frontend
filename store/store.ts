import { configureStore } from "@reduxjs/toolkit";
import createMovieSlice from "@/features/movies/CreateMovieSlice";
import movieSlice from "@/features/movies/MoviesSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    createMovie: createMovieSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
