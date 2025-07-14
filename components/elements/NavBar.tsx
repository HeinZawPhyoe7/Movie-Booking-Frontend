"use client";

import { setMoives } from "@/features/movies/MoviesSlice";
import { searchMovies } from "@/lib/apiCall";
import { useAppDispatch } from "@/store/hook";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [searchName, setSearchName] = useState("");

  const handleHome = () => {
    router.push("/");
  };

  const handleTicket = () => {};
  const handleSearchChange = (e: any) => {
    setSearchName(e.target.value);
  };

  const handleSearch = async () => {
    const response = await searchMovies(searchName);
    dispatch(setMoives(response));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <div className="text-2xl text-cyan-500 font-bold font-serif">
            easyTicket
          </div>
          <div
            onClick={handleHome}
            className="text-2xl text-cyan-500 font-bold font-serif"
          >
            Home
          </div>
          <div
            onClick={handleTicket}
            className="text-2xl text-cyan-500  font-bold font-serif"
          >
            Ticket
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-1">
            <input
              type="text"
              onChange={handleSearchChange}
              className="border px-3 py-1 border-gray-950 rounded-md"
            />
            <button
              onClick={handleSearch}
              className=" rounded-md cursor-pointer shadow-md text-white bg-cyan-500 text-sm p-1"
            >
              <Search className="p-1 text-sm " color="white" />
            </button>
          </div>
        </div>
        <div>sfdgsf</div>
      </div>
    </div>
  );
};

export default NavBar;
