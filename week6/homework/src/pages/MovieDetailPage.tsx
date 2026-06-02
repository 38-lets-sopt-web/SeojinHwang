import DetailArticle from "@/features/detail/components/DetailArticle";
import DetailSection from "@/features/detail/components/DetailSection";
import RatingForm from "@/features/detail/components/RatingForm";
import { useMovieDetail } from "@/features/detail/hooks/useMovieDetail";
import { useNavigate, useParams } from "react-router";

const MovieDetailPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data: movieDetails, isError, isLoading } = useMovieDetail(movieId);

  if (isLoading) {
    return <p className="mt-10 text-center text-2xl">영화 정보를 불러오는 중입니다.</p>;
  }

  if (isError) {
    return <p className="mt-10 text-center text-2xl">영화 정보를 불러오지 못했습니다.</p>;
  }

  if (!movieDetails) {
    return <p className="mt-10 text-center text-2xl">영화 정보가 없습니다.</p>;
  }

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
      value: `${movieDetails.budget.toLocaleString()}`,
    },
    {
      label: "수익",
      value: `${movieDetails.revenue.toLocaleString()}`,
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
          <RatingForm movieId={movieId} />
        </DetailSection>
      </div>

    </main>
  )
}

export default MovieDetailPage;
