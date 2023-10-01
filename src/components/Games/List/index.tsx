import { Game } from "@/types/game";
import GameCard from "../Card";

interface IGameList {
  data: Game[];
}
export default function GamesList({ data }: IGameList) {
  return (
    <div className="gap-4 grid grid-cols-5" data-testid="game-list-component">
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
