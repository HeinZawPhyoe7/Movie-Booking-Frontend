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
import { selectedMovieDetail } from "@/features/movies/MoviesSlice";
import { updateMovie } from "@/lib/apiCall";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditMovie = () => {
  const dispatch = useAppDispatch();
  const selectedMovie = useAppSelector(selectedMovieDetail);
  const [form, setForm] = useState({
    id: 0,
    title: "",
    description: "",
    images: "",
    genre: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (selectedMovie?.id) {
      setForm({
        id: selectedMovie.id,
        title: selectedMovie.title || "",
        description: selectedMovie.description || "",
        images: selectedMovie.images || "",
        genre: selectedMovie.genre || "",
      });
    }
  }, [selectedMovie]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await dispatch(
      updateMovie({
        id: form.id,
        data: {
          title: form.title,
          description: form.description,
          images: form.images,
          genre: form.genre,
        },
      })
    );
    router.push("get");
  };
  return (
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
            Movie Title
          </label>
          <input
            name="title"
            value={form.title}
            className="p-1 border border-gray-400 w-[300px]"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-start item-start">
          <label className="font-serif font-bold text-sm" htmlFor="">
            Movie Description
          </label>
          <textarea
            className="p-1 border border-gray-400 w-[300px]"
            name="description"
            value={form.description}
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-start item-start">
          <label className="font-serif font-bold text-sm" htmlFor="">
            Movie Image
          </label>
          <textarea
            className="p-1 border border-gray-400 w-[300px]"
            name="images"
            value={form.images}
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-start item-start">
          <label className="font-serif font-bold text-sm" htmlFor="">
            Movie Genre
          </label>
          <input
            name="genre"
            value={form.genre}
            className="p-1 border border-gray-400 w-[300px]"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="ml-20">
          <button
            onClick={handleSubmit}
            className="p-2 border rounded-md bg-sky-400 text-white w-[150px]"
          >
            Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
