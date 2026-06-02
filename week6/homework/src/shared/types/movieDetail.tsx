export interface MovieDetail {
  backdrop_path: string | null;
  poster_path: string | null;
  release_date: string;
  id: number;
  title: string;
  genres: Genre[];
  vote_average: number;
  vote_count: number;
  runtime: number | null;
  status: string;
  overview: string | null;
  original_title: string;
  original_language: string;
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  budget: number;
  revenue: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}