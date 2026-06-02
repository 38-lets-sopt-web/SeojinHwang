import MovieCard from "@/features/movie-list/components/MovieCard";
import RatingFilter from "@/features/movie-list/components/RatingFilter";
import type { Movie } from "@/shared/types/movie";
import { useState } from "react";

const movies: Movie[] = [
  {
    "id": 1304313,
    "title": "Lee Cronin's The Mummy",
    "overview": "The young daughter of a journalist disappears into the desert without a trace—eight years later, the broken family is shocked when she is returned to them, as what should be a joyful reunion turns into a living nightmare.",
    "poster_path": "/uIb9Tvae5haF0XcQBaPyufmxbb0.jpg",
    "release_date": "2026-04-15",
    "vote_average": 8.066,
  },
  {
    "id": 1339713,
    "title": "Obsession",
    "overview": "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
    "poster_path": "/6X4qFYBsG3bpWDG2XIKqr04kFJa.jpg",
    "release_date": "2026-05-13",
    "vote_average": 8.0,
  },
  {
    "id": 1380291,
    "title": "Tom Clancy's Jack Ryan: Ghost War",
    "overview": "Jack Ryan is reluctantly pulled back into espionage when an international covert mission unravels a deadly conspiracy. Racing against time, he joins CIA allies Mike November & James Greer and sharp MI6 officer Emma Marlowe to battle a rogue black-ops unit in a high-stakes, deeply personal fight.",
    "poster_path": "/8ehYxUh5MWE41AeE9gkHE8DKzvB.jpg",
    "release_date": "2026-05-20",
    "vote_average": 7.152,
  },
  {
    "id": 1433117,
    "title": "Kara",
    "overview": "A thief tries to go straight, but when predatory banks trap his father in debt, he returns to crime — with a determined cop closing in on his trail.",
    "poster_path": "/uIrFdMWlJFdc1jPBP9bxeaISCDj.jpg",
    "release_date": "2026-04-30",
    "vote_average": 6.5,
  },
  {
    "id": 687163,
    "title": "Project Hail Mary",
    "overview": "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
    "poster_path": "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    "release_date": "2026-03-15",
    "vote_average": 8.645,
  },
  {
    "id": 1226863,
    "title": "The Super Mario Galaxy Movie",
    "overview": "Having thwarted Bowser's previous plot to marry Princess Peach, Mario and Luigi now face a fresh threat in Bowser Jr., who is determined to liberate his father from captivity and restore the family legacy. Alongside companions new and old, the brothers travel across the stars to stop the young heir's crusade.",
    "poster_path": "/eJGWx219ZcEMVQJhAgMiqo8tYY.jpg",
    "release_date": "2026-04-01",
    "vote_average": 8.093,
  },
  {
    "id": 1083381,
    "title": "Backrooms",
    "overview": "A strange doorway appears in the basement of a furniture showroom.",
    "poster_path": "/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
    "release_date": "2026-05-27",
    "vote_average": 6.758,
  },
  {
    "id": 1582770,
    "title": "Dhurandhar: The Revenge",
    "overview": "As rival gangs, corrupt officials and a ruthless Major Iqbal close in, Hamza's mission for his country spirals into a bloody personal war where the line between patriot and monster disappears in the streets of Lyari.",
    "poster_path": "/ov8vrRLZGoXHpYjSY9Vpv1tHJX7.jpg",
    "release_date": "2026-03-18",
    "vote_average": 7.257,
  },
  {
    "id": 1007757,
    "title": "Swapped",
    "overview": "A small woodland creature and a majestic bird, two natural sworn enemies of the Valley, magically trade places and set off on an adventure of a lifetime to switch back. Their journey soon uncovers a greater threat—one that could endanger not only their species, but the entire valley they call home.",
    "poster_path": "/tHhxWxge06goXU6ZQH1hj7vK8Hd.jpg",
    "release_date": "2026-05-01",
    "vote_average": 8.98,
  },
]

const MovieListPage = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex justify-around pt-10">
        <h1 className="text-5xl font-bold">Movie Explorer</h1>
        <RatingFilter
          selectedRating={selectedRating}
          onChangeRating={setSelectedRating}
        />
      </header>

      <section className="grid grid-cols-4 gap-5 mx-auto max-w-[100rem] px-10 mb-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  )
}

export default MovieListPage;
