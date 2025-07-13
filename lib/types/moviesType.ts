export type MovieT = {
  id: number;
  title: string;
  description: string;
  images: string;
  genre: string;
};

export interface MovieState {
  allMovies: MovieT[];
  selectedMovieDetails: MovieT;
  status: "succeeded";
}

export type CreateMovieT = Omit<MovieT, "id">;

export type CreateMovieType = {
  status: string;
  data: CreateMovieT;
};

export interface UpdateMovieArgs {
  id: number;
  data: Partial<Omit<MovieT, "id">>;
}
