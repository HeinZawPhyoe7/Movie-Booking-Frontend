import { configureStore } from "@reduxjs/toolkit";
import createMovieSlice from "@/features/movies/CreateMovieSlice";
import movieSlice from "@/features/movies/MoviesSlice";
import movieDetailSlice from "@/features/movie-details/MovieDetailSlice";
import createMovieDetailSlice from "@/features/movie-details/CreateMovieDetailSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    movieDetails: movieDetailSlice,
    createMovie: createMovieSlice,
    createMovieDetail: createMovieDetailSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
