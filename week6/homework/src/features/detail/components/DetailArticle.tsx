import type { MovieDetail } from "@/shared/types/movieDetail";
import { BACKDROP_BASE_URL, FALLBACK_URL, IMG_BASE_URL} from "@/shared/types/imgURL";
import Chip from "./Chip";
import InfoCard from "./InfoCard";

interface DetailArticleProps {
  movieDetail: MovieDetail;
}

const DetailArticle = ({ movieDetail }:DetailArticleProps) => {
  return (
    <article className="rounded-3xl flex flex-col bg-white border border-gray-200 overflow-hidden">
      <img
        src={movieDetail.backdrop_path
          ? `${BACKDROP_BASE_URL}${movieDetail.backdrop_path}`
          : FALLBACK_URL
        }
        alt={movieDetail.title}
        className="w-full h-[37rem] object-cover"
      />

      <div className="flex p-10 gap-10">
        <img
          src={movieDetail.poster_path
            ? `${IMG_BASE_URL}${movieDetail.poster_path}`
            : FALLBACK_URL
          }
          alt={movieDetail.title}
          className="w-[23rem] h-[33rem] object-cover rounded-3xl"
        />

        <section className="flex flex-col gap-5 w-full">
          <span className="text-lg text-gray-500">{movieDetail.release_date}</span>
          <h1 className="text-6xl font-bold">{movieDetail.title}</h1>
          <div className="flex gap-2">
            {movieDetail.genres.map((genre) => (
              <Chip key={genre.id} label={genre.name} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <InfoCard label="평점" value={`${movieDetail.vote_average.toFixed(1)} / 10`} />
            <InfoCard label="투표 수" value={`${movieDetail.vote_count.toLocaleString()}`} />
            <InfoCard label="상영 시간" value={`${movieDetail.runtime}분`} />
            <InfoCard label="상태" value={`${movieDetail.status}`} />
          </div>
        </section>

      </div>

    </article>    
  )

}

export default DetailArticle;