import { MovieState } from "@/lib/types/moviesType";

const initialMovieDetails = {
  id: 0,
  title: "",
  description: "",
  images: "",
  genre: "",
};

export const initialMovieState: MovieState = {
  allMovies: [],
  selectedMovieDetails: initialMovieDetails,
};
