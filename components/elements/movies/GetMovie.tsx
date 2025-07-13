"use client";

import { AppSidebar } from "@/components/elements/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { setMovieDetails } from "@/features/movies/MoviesSlice";
import { deleteMovieId, fetchMovies } from "@/lib/apiCall";
import { MovieT } from "@/lib/types/moviesType";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { SquarePen, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GetMovie = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { allMovies } = useAppSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleEdit = (movie: MovieT) => {
    dispatch(setMovieDetails(movie));
    router.push("/admin/edit");
  };

  const handleDelete = async (movieId: number) => {
    const response = await deleteMovieId(movieId);
    if ((response.code = 200)) {
      dispatch(fetchMovies());
    }
  };
  return (
    <div>
      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
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
                      Get Movie
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div>
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>Edit</TableHead>
                      <TableHead>Delete</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allMovies.map((movies) => (
                      <TableRow key={movies.id}>
                        <TableCell>{movies.title}</TableCell>
                        <TableCell>
                          <img
                            src={`data:image/jpeg;base64,${movies.images}`}
                            alt={movies.title}
                            className="w-10 h-10 rounded cursor-pointer hover:opacity-80 transition"
                          />
                        </TableCell>
                        <TableCell>{movies.genre}</TableCell>
                        <TableCell>
                          <button
                            onClick={() => handleEdit(movies)}
                            className="cursor-pointer text-emerald-400"
                          >
                            <SquarePen size={25} />
                          </button>
                        </TableCell>
                        <TableCell>
                          <button
                            onClick={() => handleDelete(movies.id)}
                            className="cursor-pointer text-red-400"
                          >
                            <Trash2 size={25} />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default GetMovie;
