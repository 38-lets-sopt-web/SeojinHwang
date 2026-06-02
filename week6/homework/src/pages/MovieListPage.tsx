import MovieCard from "@/features/list/components/MovieCard";
import RatingFilter from "@/features/list/components/RatingFilter";
import { useMovies } from "@/features/list/hooks/useMovies";
import { useEffect, useRef, useState } from "react";

const MovieListPage = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useMovies(selectedRating);

  const movies =
    data?.pages.flatMap((page) =>
      page.results.map((movie) => ({
        ...movie,
        page: page.page,
      })),
    ) ?? [];

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target || !hasNextPage || isFetchingNextPage) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <main className="flex flex-col gap-10">
      <header className="flex justify-around pt-10">
        <h1 className="text-5xl font-bold">Movie Explorer</h1>
        <RatingFilter
          selectedRating={selectedRating}
          onChangeRating={setSelectedRating}
        />
      </header>

      {isLoading && <p className="text-center text-2xl">영화를 불러오는 중입니다.</p>}
      {isError && <p className="text-center text-2xl">영화를 불러오지 못했습니다.</p>}

      <section className="grid grid-cols-4 gap-5 mx-auto max-w-[100rem] px-10 mb-5">
        {movies.map((movie) => (
          <MovieCard key={`${movie.page}-${movie.id}`} movie={movie} />
        ))}
      </section>

      {isFetchingNextPage && (
        <p className="text-center text-2xl">영화를 더 불러오는 중입니다.</p>
      )}

      <div ref={loadMoreRef} className="h-10" />
    </main>
  )
}

export default MovieListPage;
