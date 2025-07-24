import { SeatT } from "@/lib/types/seatType";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSeatState } from "./SeatState";

const seatsSlice = createSlice({
  name: "seats",
  initialState: initialSeatState,
  reducers: {
    setSeats(state, action: PayloadAction<SeatT[]>) {
      state.allSeats = action.payload;
    },
    setSelectedSeatNumber(state, action: PayloadAction<SeatT>) {
      const existingIndex = state.selectedSeatList.findIndex(
        (seat) => seat.seat_number === action.payload.seat_number
      );
      console.log("existingIndex", existingIndex);

      if (existingIndex !== -1) {
        state.selectedSeatList.splice(existingIndex, 1);
      } else {
        state.selectedSeatList.push(action.payload);
      }

      state.selectedSeats = action.payload;
    },
  },
});

export default seatsSlice.reducer;
export const { setSeats, setSelectedSeatNumber } = seatsSlice.actions;
export const selectedSeatNumber = (state: RootState) =>
  state.seats.selectedSeats;
export const allSeatsFromRedux = (state: RootState) => state.seats.allSeats;
export const selectedSeatListRedux = (state: RootState) =>
  state.seats.selectedSeatList;
