import { useState } from "react";
import { useGuestSession } from "@/features/detail/hooks/useGuestSession";
import {
  getStoredMovieRating,
  useMovieRating,
} from "@/features/detail/hooks/useMovieRating";

interface RatingFormProps {
  movieId: string | undefined;
}

const RatingForm = ({ movieId }: RatingFormProps) => {
  const guestSessionId = useGuestSession();
  const { message, removeRating, saveRating } = useMovieRating({
    movieId,
    guestSessionId,
  });
  const [ratingInput, setRatingInput] = useState(() => {
    const storedRating = getStoredMovieRating(movieId);

    return storedRating === undefined ? "" : String(storedRating);
  });

  const handleSaveRating = () => {
    saveRating(Number(ratingInput));
  };

  const handleDeleteRating = () => {
    removeRating();
    setRatingInput("");
  };

  return (
    <>
      <input
        type="number"
        min={0.5}
        max={10}
        step={0.5}
        placeholder="0.5 ~ 10.0"
        value={ratingInput}
        onChange={(event) => setRatingInput(event.target.value)}
        className="mt-1 border border-gray-200 rounded-2xl p-5 text-xl"
      />
      <div className="flex gap-3">
        <button
          type="button"
          className="bg-gray-900 text-white text-lg rounded-xl px-5 py-3 transition hover:bg-gray-600 disabled:opacity-50"
          disabled={!guestSessionId}
          onClick={handleSaveRating}
        >
          별점 저장
        </button>

        <button
          type="button"
          className="border border-gray-200 bg-white text-gray-500 text-lg rounded-xl px-5 py-3 transition hover:bg-gray-200 disabled:opacity-50"
          disabled={!guestSessionId}
          onClick={handleDeleteRating}
        >
          별점 삭제하기
        </button>
      </div>
      {message && (
        <p className="text-lg font-semibold text-gray-700">{message}</p>
      )}
    </>
  );
};

export default RatingForm;
