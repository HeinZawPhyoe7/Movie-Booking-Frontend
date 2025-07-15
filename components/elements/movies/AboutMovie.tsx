"use client";

import { selectedMovieDetail } from "@/features/movies/MoviesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import React from "react";

const AboutMovie = () => {
  const dispatch = useAppDispatch();
  const currentSelectedMovie = useAppSelector(selectedMovieDetail);

  const handleBookNow = () => {};
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <img
          src={`data:image/jpeg;base64,${currentSelectedMovie.images}`}
          alt={currentSelectedMovie.title}
          className="w-80 h-96 rounded cursor-pointer hover:opacity-80 transition"
        />
        <div className="text-3xl font-bold font-serif">
          {currentSelectedMovie.title}
        </div>
        <div className="text-xl font-serif">
          Genre: {currentSelectedMovie.genre}
        </div>
        <div className="text-xl font-serif">
          {currentSelectedMovie.description}
        </div>
        <div>
          <button
            onClick={handleBookNow}
            className="text-xl font-serif bg-sky-400 text-white p-2 w-[350px] rounded-2xl cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;
