import { useEffect, useState } from "react";
import { fetchMovies } from "@/lib/apiCall";
import type { MovieT } from "@/lib/types/moviesType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setMovies } from "@/features/movies/MoviesSlice";

export const useFetchMovies = () => {
  const dispatch = useAppDispatch();
  const allMovies = useAppSelector((s) => s.movies.allMovies);

  const [loading, setLoading] = useState(false);
  const load = async () => {
    try {
      setLoading(true);

      const movies: MovieT[] = await fetchMovies();
      dispatch(setMovies(movies));
    } catch (err) {
      console.error("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allMovies.length === 0) load();
  }, []);

  return {
    movies: allMovies,
    loading,
    refetch: load,
  };
};
