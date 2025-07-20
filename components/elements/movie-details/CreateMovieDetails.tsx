"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { CreateMovieDetailT } from "@/lib/types/movieDetails";
import { ChangeEvent, useState } from "react";
import {
  CreateMovieDetailForm,
  resetMovieDetailForm,
  setMovieDetailField,
} from "@/features/movie-details/CreateMovieDetailSlice";
import { createMovieDetail } from "@/lib/apiCall";

const CreateMovieDetails = () => {
  const { movies: allMovies, loading: fetchMovieLoading } = useFetchMovies();
  const dispatch = useAppDispatch();
  const formData = useAppSelector(CreateMovieDetailForm);

  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      setMovieDetailField({ field: name as keyof CreateMovieDetailT, value })
    );
  };

  const handleCreate = () => {
    if (selectedMovieId === null) {
      return console.log("aa", "There is No Movie ID");
    }
    dispatch(
      createMovieDetail({
        cinema_name: formData.cinema_name,
        cinema_place: formData.cinema_place,
        period_time: formData.period_time,
        show_time: formData.show_time,
        movie_id: selectedMovieId,
      })
    );
    dispatch(resetMovieDetailForm());
  };

  return (
    <div>
      <div>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-serif font-bold text-sm">
                  Create Movie
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-col p-4 space-y-2">
          <div className="flex flex-col justify-start item-start">
            <label className="font-serif font-bold text-sm" htmlFor="">
              Select Movie
            </label>
            {fetchMovieLoading ? (
              <div>Movie is loading...</div>
            ) : (
              <Select onValueChange={(val) => setSelectedMovieId(Number(val))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Movies" />
                </SelectTrigger>
                <SelectContent>
                  {allMovies.map((movie) => {
                    return (
                      <SelectItem key={movie.id} value={String(movie.id)}>
                        {movie.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="flex flex-col justify-start item-start">
            <label className="font-serif font-bold text-sm" htmlFor="">
              Cinema Place
            </label>
            <input
              name="cinema_place"
              value={(formData as any)["cinema_place"]}
              className="p-1 border border-gray-400 w-[300px]"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col justify-start item-start">
            <label className="font-serif font-bold text-sm" htmlFor="">
              Cinema Name
            </label>
            <input
              name="cinema_name"
              value={(formData as any)["cinema_name"]}
              className="p-1 border border-gray-400 w-[300px]"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start item-start">
            <label className="font-serif font-bold text-sm" htmlFor="">
              Period Time
            </label>
            <input
              name="period_time"
              value={(formData as any)["period_time"]}
              className="p-1 border border-gray-400 w-[300px]"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start item-start">
            <label className="font-serif font-bold text-sm" htmlFor="">
              Show Time
            </label>
            <input
              name="show_time"
              value={(formData as any)["show_time"]}
              className="p-1 border border-gray-400 w-[300px]"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="ml-20">
            <button
              onClick={handleCreate}
              className="p-2 border rounded-md bg-sky-400 text-white w-[150px]"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovieDetails;
