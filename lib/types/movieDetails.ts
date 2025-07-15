export type MovieDetailT = {
  id: number;
  cinema_name: string;
  cinema_place: string;
  period_time: string;
  show_time: string;
  movie_id: number;
};

export type CreateMovieDetailT = Omit<MovieDetailT, "id">;

export type CreateMovieDetailType = {
  status: string;
  data: CreateMovieDetailT;
};
