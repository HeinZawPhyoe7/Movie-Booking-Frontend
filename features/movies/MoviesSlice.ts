import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialMovieState } from "./MovieState";
import { MovieT } from "@/lib/types/moviesType";
import { fetchMovies, updateMovie } from "@/lib/apiCall";
import { RootState } from "@/store/store";

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    setMoives(state, action: PayloadAction<MovieT[]>) {
      state.allMovies = action.payload;
    },
    setMovieDetails(state, action: PayloadAction<MovieT>) {
      state.selectedMovieDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.allMovies = action.payload;
    });
    builder.addCase(updateMovie.fulfilled, (state, { payload }) => {
      const idx = state.allMovies.findIndex((movie) => movie.id === payload.id);
      if (idx !== -1) state.allMovies[idx] = payload;

      state.selectedMovieDetails = payload;
      state.status = "succeeded";
    });
  },
});

export default moviesSlice.reducer;
export const { setMoives, setMovieDetails } = moviesSlice.actions;
export const selectedMovieDetail = (state: RootState) =>
  state.movies.selectedMovieDetails;
