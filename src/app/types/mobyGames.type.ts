export interface MobyGames {
  games: Game[];
}

export interface Game {
  alternate_titles: {
    description: string;
    title: string;
  }[];
  description: string;
  game_id: number,
  genres: {
    genre_category: string;
    genre_category_id: number;
    genre_id: number;
    genre_name: string;
  }[];
  moby_score: number
  moby_url: string;
  num_votes: number;
  official_url: string;
  platforms:{
    first_release_date: string,
    platform_id: number;
    platform_name: string;
  }[];
}

export interface Plataform  {
  platforms:{
    platform_id: number;
    platform_name: string;
  }[]
}


