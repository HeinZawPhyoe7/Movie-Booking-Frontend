"use client";

import { useFetchSeats } from "@/hooks/useFetchSeats";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Ban } from "lucide-react";

const Seat = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { seats: allSeats } = useFetchSeats();

  return (
    <div>
      <div className="flex justify-center items-center gap-6">
        <div className="gap-2">
          <Checkbox className="" />
          Available
        </div>
        <div className="gap-2">
          <Checkbox checked />
          Selected
        </div>
        <div className="flex justify-center items-center gap-2">
          <Ban size={15} />
          Unavailable
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 px-12">
        {allSeats.map((seat) => (
          <div key={seat.id} className="border w-10 rounded-md text-center">
            {seat.seat_number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seat;
