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
  CreateMovieForm,
  resetMovieForm,
  setMovieField,
} from "@/features/movies/CreateMovieSlice";
import { createMovie } from "@/lib/apiCall";
import { CreateMovieT } from "@/lib/types/moviesType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ChangeEvent } from "react";

const CreateMovie = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(CreateMovieForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(setMovieField({ field: name as keyof CreateMovieT, value }));
  };

  const handleCreate = () => {
    dispatch(
      createMovie({
        title: formData.title,
        description: formData.description,
        images: formData.images,
        genre: formData.genre,
      })
    );
    dispatch(resetMovieForm());
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
              Movie Title
            </label>
            <input
              name="title"
              value={(formData as any)["title"]}
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
              value={(formData as any)["description"]}
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
              value={(formData as any)["images"]}
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
              className="p-1 border border-gray-400 w-[300px]"
              value={(formData as any)["genre"]}
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

export default CreateMovie;
