import { SeatT } from "@/lib/types/seatType";

export interface SeatState {
  allSeats: SeatT[];
  selectedSeats: SeatT;
  selectedSeatList: SeatT[];
}

const initialSeatDetails = {
  id: 0,
  seat_number: "",
  seat_type: "",
  status: "",
  fee: "",
};

export const initialSeatState: SeatState = {
  allSeats: [],
  selectedSeats: initialSeatDetails,
  selectedSeatList: [],
};
