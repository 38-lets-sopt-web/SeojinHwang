import http from "@/shared/api/http";
import type {
  GuestSessionResponse,
  RatingResponse,
} from "@/shared/types/movieRating";

export const fetchGuestSession = () => {
  return http.get<GuestSessionResponse>("/authentication/guest_session/new");
};

interface RateMovieParams {
  movieId: string;
  rating: number;
  guestSessionId: string;
}

export const rateMovie = ({
  movieId,
  rating,
  guestSessionId,
}: RateMovieParams) => {
  return http.post<RatingResponse>(
    `/movie/${movieId}/rating`,
    { value: rating },
    { guest_session_id: guestSessionId },
  );
};

interface DeleteMovieRatingParams {
  movieId: string;
  guestSessionId: string;
}

export const deleteMovieRating = ({
  movieId,
  guestSessionId,
}: DeleteMovieRatingParams) => {
  return http.delete<RatingResponse>(`/movie/${movieId}/rating`, {
    guest_session_id: guestSessionId,
  });
};
