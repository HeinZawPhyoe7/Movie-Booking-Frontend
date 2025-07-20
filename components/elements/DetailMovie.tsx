"use client";

import { selectedMovieDetail } from "@/features/movies/MoviesSlice";
import { useFetchMovieDetails } from "@/hooks/useFetchMovieDetails";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Ticket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const DetailMovie = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentSelectedMovie = useAppSelector(selectedMovieDetail);

  const movieId = currentSelectedMovie?.id;

  const { movieDetails: allMovieDetails } = useFetchMovieDetails(movieId);

  const handleChooseSeat = () => {};

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Image
          src={`data:image/jpeg;base64,${currentSelectedMovie.images}`}
          alt={currentSelectedMovie.title}
          width={120}
          height={120}
          className="w-80 h-96 rounded cursor-pointer hover:opacity-80 transition"
        />
        <div className="text-3xl font-bold font-serif">
          {currentSelectedMovie.title}
        </div>
        <div className="flex justify-center items-center bg-black text-white p-2 rounded-md gap-4 text-3xl font-bold font-serif">
          <Ticket size={25} className="text-white" /> Ticket Type
        </div>
        <div className="space-y-4">
          {allMovieDetails.map((movie: any, index: number) => (
            <div
              className="grid grid-cols-4 gap-6 p-4 rounded-md bg-black"
              key={index}
            >
              <div className="text-xl font-serif text-white">
                {movie.cinema_name}
              </div>
              <div className="text-xl font-serif text-white">
                {movie.cinema_place}
              </div>
              <div className="text-xl font-serif text-white">
                {movie.show_time}
              </div>
              <button
                onClick={handleChooseSeat}
                className="text-xl font-serif bg-sky-400 text-white p-1 w-[100px] rounded-2xl cursor-pointer"
              >
                {movie.ticket_status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
