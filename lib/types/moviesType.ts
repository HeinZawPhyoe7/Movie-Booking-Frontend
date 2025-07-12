export type MovieT = {
  id: number;
  title: string;
  description: string;
  images: string;
  genre: string;
};

export interface MovieState {
  allMovies: MovieT[];
  selectedMovies: MovieT[];
  selectedMovieDetails: MovieT;
}

export type CreateMovieT = Omit<MovieT, "id">;

export type CreateMovieType = {
  status: string;
  data: CreateMovieT;
};
