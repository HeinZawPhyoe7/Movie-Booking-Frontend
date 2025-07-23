import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateMovieT, MovieT, UpdateMovieArgs } from "../types/moviesType";
import axiosInstance from "./axiosInstance";
import { CreateMovieDetailT, MovieDetailT } from "../types/movieDetails";
import { SeatT } from "../types/seatType";

//Movies
export const fetchMovies = async () => {
  const response = await axiosInstance.get("/auth/getAll/movies");
  return response.data.movies as MovieT[];
};

export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (movie: CreateMovieT, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/create/movies", movie);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create failed"
      );
    }
  }
);

export const searchMovies = async (searchMovies: string) => {
  const response = await axiosInstance.post("/auth/search/movies", {
    name: searchMovies,
  });
  return response.data.movies as MovieT[];
};

export const deleteMovieId = async (movieId: number) => {
  const response = await axiosInstance.post("/auth/delete/movies", {
    movieId,
  });
  return response.data;
};

//Movie Details
export const createMovieDetail = createAsyncThunk(
  "movies/createMovie",
  async (movieDetail: CreateMovieDetailT, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/auth/create/movie/details",
        movieDetail
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create failed"
      );
    }
  }
);

export const fetchMovieDetailsByMovieId = async (
  movieId: number
): Promise<MovieDetailT[]> => {
  const response = await axiosInstance.get(
    `/auth/show/movie/details/${movieId}`
  );
  return response.data.movieDetails as MovieDetailT[];
};

export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, data }: UpdateMovieArgs, thankAPI) => {
    try {
      const response = await axiosInstance.post("/auth/update/movies", {
        id,
        ...data,
      });
      return response.data as MovieT;
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.response?.data ?? error.message);
    }
  }
);

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout", {});

  return response.data;
};

//Seats

export const fetchSeats = async () => {
  const response = await axiosInstance.get("/auth/getAll/seats");
  return response.data.seats as SeatT[];
};
