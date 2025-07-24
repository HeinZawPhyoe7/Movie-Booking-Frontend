"use client";

import { setSelectedMovieDetail } from "@/features/movies/MoviesSlice";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieT } from "@/lib/types/moviesType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { movies: allMovies } = useFetchMovies();

  const handleMovieClick = (movie: MovieT) => {
    dispatch(setSelectedMovieDetail(movie));
    router.push("/about-movies");
  };
  return (
    <div>
      <div>
        <h3>All Events</h3>
        <div className="space-y-6 grid grid-cols-4">
          {allMovies.map((movie: any, index: number) => (
            <div
              key={index}
              className="flex justify-start items-start bg-gray-50 shadow-md gap-4 w-[350px] cursor-pointer"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative w-20 h-28">
                <Image
                  src={`data:image/jpeg;base64,${movie.images}`}
                  alt={movie.title}
                  fill
                  className="object-cover rounded cursor-pointer hover:opacity-80 transition"
                />
              </div>
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
