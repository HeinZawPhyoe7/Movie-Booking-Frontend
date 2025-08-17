"use client";

import { selectedMovieDetail } from "@/features/movies/MoviesSlice";
import { selectedSeatListRedux } from "@/features/seat/SeatSlice";
import { useAppSelector } from "@/store/hook";

const Payment = () => {
  const currentSelectedMovie = useAppSelector(selectedMovieDetail);
  const currentSelectedSeat = useAppSelector(selectedSeatListRedux);
  return (
    <div>
      <div>{currentSelectedMovie.title}</div>
      <div>
        {currentSelectedSeat.map((seat) => (
          <div key={seat.id}>{seat.seat_number}</div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
