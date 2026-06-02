import type { Movie } from "@/shared/types/movie";
import { useNavigate } from "react-router";
import { IMG_BASE_URL, FALLBACK_URL } from "@/shared/types/imgURL";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      className="flex flex-col rounded-xl bg-white overflow-hidden cursor-pointer transition hover:scale-102 hover:shadow-lg"
      onClick={() => navigate(`/${movie.id}`)}
    >
      <img
        src={movie.poster_path
              ? `${IMG_BASE_URL}${movie.poster_path}`
              : FALLBACK_URL
        }
        alt={movie.title}
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-3 overflow-hidden">
        <h2 className="text-2xl font-semibold truncate">{movie.title}</h2>
        <span className="text-md">{movie.release_date}</span>
        <p className="text-md line-clamp-3">{movie.overview || "줄거리가 없습니다."}</p>
      </div>
    </article>
  );
}

export default MovieCard;