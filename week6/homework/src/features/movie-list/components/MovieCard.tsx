import type { Movie } from "@/shared/types/movie";
import { useNavigate } from "react-router";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
const FALLBACK_URL = "https://placehold.co/500x750?text=No+Poster";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      className="flex flex-col rounded-lg bg-white overflow-hidden cursor-pointer transition hover:scale-105 hover:shadow-2xs"
      onClick={() => navigate(`/&{movie.id}`)}
    >
      <img
        src={movie.poster_path
              ? `${IMG_BASE_URL}${movie.poster_path}`
              : FALLBACK_URL
        }
        alt={movie.title}
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-1 p-3 overflow-hidden">
        <h2 className="text-base font-semibold truncate">{movie.title}</h2>
        <span className="text-sm">{movie.release_date}</span>
        <p className="text-sm truncate">{movie.overview || "줄거리가 없습니다."}</p>
      </div>
    </article>
  );
}

export default MovieCard;