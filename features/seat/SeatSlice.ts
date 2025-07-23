import { SeatT } from "@/lib/types/seatType";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SeatState = {
  allSeats: SeatT[];
  selectedSeats: SeatT[];
};

const initialState: SeatState = {
  allSeats: [],
  selectedSeats: [],
};

const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    setSeats(state, action: PayloadAction<SeatT[]>) {
      state.allSeats = action.payload;
    },
    setSelectedSeatNumber(state, action: PayloadAction<SeatT[]>) {
      state.selectedSeats = action.payload;
    },
  },
});

export default seatsSlice.reducer;
export const { setSeats, setSelectedSeatNumber } = seatsSlice.actions;
export const selectedSeatNumber = (state: RootState) =>
  state.seats.selectedSeats;
