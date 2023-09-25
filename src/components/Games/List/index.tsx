import { Game } from "@/types/game";
import GameCard from "../Card";

interface IGameList {
  data: Game[];
}
export default function GamesList({ data }: IGameList) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
