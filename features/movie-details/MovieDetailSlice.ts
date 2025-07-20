import { MovieDetailT } from "@/lib/types/movieDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  allMovieDetails: MovieDetailT[];
};

const initialState: State = {
  allMovieDetails: [],
};

const movieDetailSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<MovieDetailT[]>) => {
      state.allMovieDetails = action.payload;
    },
  },
});

export const { setMovieDetails } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
