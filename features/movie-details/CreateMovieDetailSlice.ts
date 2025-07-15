import { createMovie } from "@/lib/apiCall";
import {
  CreateMovieDetailT,
  CreateMovieDetailType,
} from "@/lib/types/movieDetails";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CreateMovieDetailType = {
  status: "",
  data: {
    cinema_name: "",
    cinema_place: "",
    period_time: "",
    show_time: "",
    movie_id: 0,
  },
};

const createMovieDetailSlice = createSlice({
  name: "createMovieDetail",
  initialState,
  reducers: {
    setMovieDetailField: (
      state,
      action: PayloadAction<{ field: keyof CreateMovieDetailT; value: string }>
    ) => {
      const { field, value } = action.payload;
      if (field === "movie_id") {
        state.data[field] = parseFloat(value) || 0;
      } else {
        state.data[field] = value;
      }
    },

    resetMovieDetailForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createMovie.fulfilled, (state) => {
      state.status = "succeeded";
    });
  },
});

export const { setMovieDetailField } = createMovieDetailSlice.actions;
export default createMovieDetailSlice.reducer;

export const CreateMovieDetailForm = (state: RootState) =>
  state.createMovieDetail.data;
export const CreateMovieDetailStatus = (state: RootState) =>
  state.createMovieDetail.status;
