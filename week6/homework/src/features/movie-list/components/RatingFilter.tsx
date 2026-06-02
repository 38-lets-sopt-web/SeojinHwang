interface RatingFilterProps {
  selectedRating: number | null;
  onChangeRating: (rating: number | null) => void;
}

const RatingFilter = ({
  selectedRating,
  onChangeRating,
}: RatingFilterProps) => {
  return (
    <select
      value={selectedRating ?? "all"}
      onChange={(event) => {
        const value = event.target.value;

        onChangeRating(value === "all" ? null : Number(value));
      }}
      className="rounded-md border border-gray-700 bg-white p-2"
    >
      <option value="all">전체 별점</option>
      {Array.from({ length: 10 }, (_, i) => {
        const rating = i + 1;

        return (
          <option key={rating} value={rating}>
            {rating}점 대
          </option>
        );
      })}
    </select>
  )
}

export default RatingFilter;