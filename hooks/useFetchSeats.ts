import { setSeats } from "@/features/seat/SeatSlice";
import { fetchSeats } from "@/lib/apiCall";
import { SeatT } from "@/lib/types/seatType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";

export const useFetchSeats = () => {
  const dispatch = useAppDispatch();
  const allSeats = useAppSelector((s) => s.seats.allSeats);

  const [loading, setLoading] = useState(false);
  const load = async () => {
    try {
      setLoading(true);

      const seats: SeatT[] = await fetchSeats();
      dispatch(setSeats(seats));
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allSeats.length === 0) load();
  }, []);

  return {
    seats: allSeats,
    loading,
    refetch: load,
  };
};
