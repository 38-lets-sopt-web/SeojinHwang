import http from "@/shared/api/http";
import type { MovieDetail } from "@/shared/types/movieDetail";

export const getMovieDetail = (movieId: string) => {
  return http.get<MovieDetail>(`/movie/${movieId}`);
};
