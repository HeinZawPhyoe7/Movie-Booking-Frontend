"use client";

import { setMovieDetails } from "@/features/movies/MoviesSlice";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieT } from "@/lib/types/moviesType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { movies: allMovies } = useFetchMovies();

  const handleMovieClick = (movie: MovieT) => {
    dispatch(setMovieDetails(movie));
    router.push("/about-movies");
  };
  return (
    <div>
      <div>
        <h3>All Events</h3>
        <div className="space-y-6 grid grid-cols-3">
          {allMovies.map((movie: any, index: number) => (
            <div
              key={index}
              className="flex justify-start items-start bg-gray-50 shadow-md gap-4 w-[350px] cursor-pointer"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`data:image/jpeg;base64,${movie.images}`}
                alt={movie.title}
                className="w-20 h-30 rounded cursor-pointer hover:opacity-80 transition"
              />
              <div className="p-2">
                <div>{movie.title}</div>
                <div>{movie.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
