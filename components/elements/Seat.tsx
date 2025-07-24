"use client";

import { useFetchSeats } from "@/hooks/useFetchSeats";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import {
  allSeatsFromRedux,
  selectedSeatListRedux,
  selectedSeatNumber,
  setSelectedSeatNumber,
} from "@/features/seat/SeatSlice";
import { SeatT } from "@/lib/types/seatType";
import { toast } from "react-toastify";

const Seat = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { seats: allSeats } = useFetchSeats();
  const allSeatReduxState = useAppSelector(allSeatsFromRedux);
  const selectedSeatListStates = useAppSelector(selectedSeatListRedux);
  const handleSelectSeat = (seat: SeatT) => {
    if (seat.status === "Available") {
      dispatch(setSelectedSeatNumber(seat));
    } else {
      toast.error("This seat is Unavaliable!", {
        position: "top-center",
      });
    }
  };

  const handleContinue = () => {
    // router.push("/");
  };

  return (
    <div className="p-10">
      <div className="flex justify-center items-center gap-6 pb-4">
        <div className="flex justify-center items-center">
          <p className="border w-10 text-cyan-400 bg-cyan-400 text-center rounded-md">
            A1
          </p>
          Available
        </div>
        <div className="flex justify-center items-center">
          <p className="border w-10 text-green-400 bg-green-400 text-center rounded-md">
            A1
          </p>
          Selected
        </div>
        <div className="flex justify-center items-center">
          <p className="border w-10 text-red-400 bg-red-400 text-center rounded-md">
            A1
          </p>
          Unavailable
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 px-12">
        {allSeatReduxState.map((seat: SeatT) => {
          const isSelected = selectedSeatListStates.some(
            (selectedSeat) => selectedSeat.seat_number === seat.seat_number
          );

          return (
            <div
              key={seat.id}
              onClick={() => handleSelectSeat(seat)}
              className={cn(
                "border w-16 p-1 text-white text-xl rounded-md text-center cursor-pointer",
                seat.status === "Available" && "bg-cyan-400 hover:bg-cyan-500",
                seat.status === "Unavailable" && "bg-red-400",
                isSelected && "bg-green-500 hover:bg-green-400"
              )}
            >
              {seat.seat_number}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center pt-6">
        <button
          onClick={handleContinue}
          className="p-2 border rounded-md bg-sky-400 hover:bg-sky-500 text-white cursor-pointer w-[150px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Seat;
