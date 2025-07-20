import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialMovieState } from "./MovieState";
import { MovieT } from "@/lib/types/moviesType";
import { updateMovie } from "@/lib/apiCall";
import { RootState } from "@/store/store";

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    setMovies(state, action: PayloadAction<MovieT[]>) {
      state.allMovies = action.payload;
    },
    setSelectedMovieDetail(state, action: PayloadAction<MovieT>) {
      state.selectedMovieDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateMovie.fulfilled, (state, { payload }) => {
      const idx = state.allMovies.findIndex((movie) => movie.id === payload.id);
      if (idx !== -1) state.allMovies[idx] = payload;

      state.selectedMovieDetail = payload;
      state.status = "succeeded";
    });
  },
});

export default moviesSlice.reducer;
export const { setMovies, setSelectedMovieDetail } = moviesSlice.actions;
export const selectedMovieDetail = (state: RootState) =>
  state.movies.selectedMovieDetail;
