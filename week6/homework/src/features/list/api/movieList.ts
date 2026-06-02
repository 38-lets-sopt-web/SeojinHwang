import http from "@/shared/api/http";
import type { MovieListResponse } from "@/shared/types/movie";

interface GetMovieListParams {
  page: number;
  rating: number | null;
}

export const getMovieList = ({ page, rating }: GetMovieListParams) => {
  return http.get<MovieListResponse>("/discover/movie", {
    page,
    ...(rating !== null && {
      "vote_average.gte": rating,
      "vote_average.lte": rating === 10 ? 10 : rating + 0.999,
    }),
  });
};
