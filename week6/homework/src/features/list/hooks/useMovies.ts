import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovieList } from "@/features/list/api/movieList";

export const useMovies = (selectedRating: number | null) => {
  return useInfiniteQuery({
    queryKey: ["movies", "infinite", selectedRating],
    queryFn: ({ pageParam }) =>
      getMovieList({ page: pageParam, rating: selectedRating }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });
};
