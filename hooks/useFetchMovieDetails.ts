// hooks/useFetchMovieDetails.ts
import { useEffect, useState } from "react";
import { fetchMovieDetailsByMovieId } from "@/lib/apiCall";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { MovieDetailT } from "@/lib/types/movieDetails";
import { setMovieDetails } from "@/features/movie-details/MovieDetailSlice";

export const useFetchMovieDetails = (movieId: number) => {
  const dispatch = useAppDispatch();
  const allDetails = useAppSelector((s) => s.movieDetails.allMovieDetails);

  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const details: MovieDetailT[] = await fetchMovieDetailsByMovieId(movieId);
      console.log("movie details fetched", details);
      dispatch(setMovieDetails(details));
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieId && allDetails.length === 0) {
      load();
    }
  }, [movieId]);

  return {
    movieDetails: allDetails,
    loading,
    refetch: load,
  };
};
