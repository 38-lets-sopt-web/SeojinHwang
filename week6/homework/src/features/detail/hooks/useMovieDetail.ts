import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "@/features/detail/api/movieDetail";

export const useMovieDetail = (movieId: string | undefined) => {
  return useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => getMovieDetail(movieId as string),
    enabled: movieId !== undefined,
  });
};
