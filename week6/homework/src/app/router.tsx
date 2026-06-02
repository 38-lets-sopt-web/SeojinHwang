import { createBrowserRouter } from "react-router"
import MovieListPage from "@/pages/MovieListPage"
import MovieDetailPage from "@/pages/MovieDetailPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />
  },
  {
    path: "/:movieId",
    element: <MovieDetailPage />
  },
]);