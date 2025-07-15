"use client";

import { setMovies } from "@/features/movies/MoviesSlice";
import { logout, searchMovies } from "@/lib/apiCall";
import { useAppDispatch } from "@/store/hook";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken") || "");
  }, []);
  const [searchName, setSearchName] = useState("");

  const handleHome = () => {
    router.push("/");
  };

  const handleTicket = () => {};

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userType");
    router.push("/login");
  };

  const handleSearchChange = (e: any) => {
    setSearchName(e.target.value);
  };

  const handleSearch = async () => {
    const response = await searchMovies(searchName);
    dispatch(setMovies(response));
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
        <div>
          {accessToken ? (
            <button
              onClick={handleLogout}
              className="bg-red-400 p-2 text-white border cursor-pointer rounded-md shadow-md"
            >
              Logout
            </button>
          ) : (
            <div>
              <button
                onClick={handleRegister}
                className="bg-sky-400 p-2 text-white border cursor-pointer rounded-md shadow-md"
              >
                Register
              </button>
              <button
                onClick={handleLogin}
                className="bg-sky-400 p-2 text-white border cursor-pointer rounded-md shadow-md"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
