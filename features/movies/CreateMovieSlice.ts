import { createMovie } from "@/lib/apiCall";
import { CreateMovieT, CreateMovieType } from "@/lib/types/moviesType";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CreateMovieType = {
  status: "",
  data: {
    title: "",
    description: "",
    images: "",
    genre: "",
  },
};

const createMovieSlice = createSlice({
  name: "createMovie",
  initialState,
  reducers: {
    setMovieField: (
      state,
      action: PayloadAction<{ field: keyof CreateMovieT; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
    resetMovieForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createMovie.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createMovie.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setMovieField, resetMovieForm } = createMovieSlice.actions;
export default createMovieSlice.reducer;

export const CreateMovieForm = (state: RootState) => state.createMovie.data;
export const CreateMovieStatus = (state: RootState) => state.createMovie.status;
