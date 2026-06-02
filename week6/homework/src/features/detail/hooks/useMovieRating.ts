import { useState } from "react";
import {
  deleteMovieRating,
  rateMovie,
} from "@/features/detail/api/movieRating";

const MIN_RATING = 0.5;
const MAX_RATING = 10;
const MOVIE_RATINGS_KEY = "movie_ratings";

const getStoredMovieRatings = () => {
  const storedMovieRatings = localStorage.getItem(MOVIE_RATINGS_KEY);

  if (!storedMovieRatings) {
    return {};
  }

  return JSON.parse(storedMovieRatings) as Record<string, number>;
};

export const getStoredMovieRating = (movieId: string | undefined) => {
  if (!movieId) {
    return undefined;
  }

  return getStoredMovieRatings()[movieId];
};

const setStoredMovieRating = (movieId: string, rating: number) => {
  const storedMovieRatings = getStoredMovieRatings();

  localStorage.setItem(
    MOVIE_RATINGS_KEY,
    JSON.stringify({
      ...storedMovieRatings,
      [movieId]: rating,
    }),
  );
};

const removeStoredMovieRating = (movieId: string) => {
  const storedMovieRatings = getStoredMovieRatings();
  const nextMovieRatings = { ...storedMovieRatings };

  delete nextMovieRatings[movieId];

  localStorage.setItem(MOVIE_RATINGS_KEY, JSON.stringify(nextMovieRatings));
};

interface UseMovieRatingParams {
  movieId: string | undefined;
  guestSessionId: string | null;
}

export const useMovieRating = ({
  movieId,
  guestSessionId,
}: UseMovieRatingParams) => {
  const [message, setMessage] = useState("");

  const saveRating = (rating: number) => {
    if (!movieId || !guestSessionId) {
      return;
    }

    if (rating < MIN_RATING || rating > MAX_RATING || Number.isNaN(rating)) {
      setMessage("0.5부터 10.0 사이의 별점만 저장할 수 없습니다.");
      return;
    }

    rateMovie({ movieId, rating, guestSessionId })
      .then(() => {
        setStoredMovieRating(movieId, rating);
        setMessage("별점이 저장되었습니다.");
      })
      .catch(() => setMessage("별점 저장에 실패했습니다."));
  };

  const removeRating = () => {
    if (!movieId || !guestSessionId) {
      return;
    }

    deleteMovieRating({ movieId, guestSessionId })
      .then(() => {
        removeStoredMovieRating(movieId);
        setMessage("별점이 삭제되었습니다.");
      })
      .catch(() => setMessage("별점 삭제에 실패했습니다."));
  };

  return {
    message,
    removeRating,
    saveRating,
  };
};
