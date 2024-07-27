import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    name: any;
    platform: Platform;
    metacritic: null | number;
    rating_top: number;
    rating: number;
  }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search : gameQuery.searchText,
      },
    },

    [gameQuery]
  );
{
}

export default useGames;
