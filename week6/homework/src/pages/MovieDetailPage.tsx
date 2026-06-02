import DetailArticle from "@/features/detail/components/DetailArticle";
import DetailSection from "@/features/detail/components/DetailSection";
import type { MovieDetail } from "@/shared/types/movieDetail";
import { useNavigate } from "react-router";

const movieDetails: MovieDetail = {
  "backdrop_path": "/9Z2uDYXqJrlmePznQQJhL6d92Rq.jpg",
  "budget": 110000000,
  "genres": [
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 16,
      "name": "Animation"
    }
    ],
    "id": 1226863,
    "original_language": "en",
    "original_title": "The Super Mario Galaxy Movie",
    "overview": "Having thwarted Bowser's previous plot to marry Princess Peach, Mario and Luigi now face a fresh threat in Bowser Jr., who is determined to liberate his father from captivity and restore the family legacy. Alongside companions new and old, the brothers travel across the stars to stop the young heir's crusade.",
    "poster_path": "/eJGWx219ZcEMVQJhAgMiqo8tYY.jpg",
    "production_countries": [
        {
            "iso_3166_1": "JP",
            "name": "Japan"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2026-04-01",
    "revenue": 991800000,
    "runtime": 98,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "title": "The Super Mario Galaxy Movie",
    "vote_average": 8.109,
    "vote_count": 2228
}

const MovieDetailPage = () => {
  const navigate = useNavigate();
  const basicInfoRows = [
    {
      label: "원제",
      value: movieDetails.original_title,
    },
    {
      label: "원어",
      value: movieDetails.original_language,
    },
    {
      label: "제작 국가",
      value: movieDetails.production_countries
        .map((country) => country.name)
        .join(", "),
    },
    {
      label: "사용 언어",
      value: movieDetails.spoken_languages
        .map((language) => language.english_name)
        .join(", "),
    },
    {
      label: "예산",
      value: `US $${movieDetails.budget.toLocaleString()}`,
    },
    {
      label: "수익",
      value: `US $${movieDetails.revenue.toLocaleString()}`,
    },
  ];

  return (
    <main className="flex flex-col gap-8 mx-auto max-w-[100rem] my-10">
      <button 
        className="self-start text-lg text-gray-500 font-semibold translate-y-3 transition hover:text-gray-900"
        onClick={() => navigate("/")}
      >
        ← 목록으로 돌아가기
      </button>

      <DetailArticle movieDetail={movieDetails} />

      <DetailSection title="줄거리">
        <p className="text-2xl text-gray-600">
          {movieDetails.overview}
        </p>
      </DetailSection>

      <div className="flex gap-8 mb-5">
        <DetailSection title="기본 정보" className="w-[60%]">
          <table className="w-full">
            <tbody>
              {basicInfoRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <th className="w-[15rem] p-4 text-left text-xl font-semibold text-gray-500">
                    {row.label}
                  </th>
                  <td className="py-4 text-xl font-semibold text-gray-900">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DetailSection>

        <DetailSection title="별점 남기기" className="w-[40%]">
          <input 
            type="number"
            placeholder="0.5 ~ 10.0"
            className="mt-1 border border-gray-200 rounded-2xl p-5 text-xl"
          />
          <div className="flex gap-3">
            <button
              className="bg-gray-900 text-white text-lg rounded-xl px-5 py-3 transition hover:bg-gray-600"
            >
              별점 저장
            </button>

            <button
              className="border border-gray-200 bg-white text-gray-500 text-lg rounded-xl px-5 py-3 transition hover:bg-gray-200"
            >
              별점 삭제하기
            </button>          
          </div>

        </DetailSection>
      </div>

    </main>
  )
}

export default MovieDetailPage;
