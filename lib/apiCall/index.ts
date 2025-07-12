import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateMovieT } from "../types/moviesType";
import axiosInstance from "./axiosInstance";

export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (movie: CreateMovieT, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/create/movies", movie);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create failed"
      );
    }
  }
);
