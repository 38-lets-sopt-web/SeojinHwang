export interface Movie {
  id: number;
  title: string;
  overview: string | null;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}