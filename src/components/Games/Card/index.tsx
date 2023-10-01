import { Game } from "@/types/game";
import Link from "next/link";

export interface IGameCard {
  game: Game;
}
export default function GameCard({
  game: { id, name, background_image, platforms, genres },
}: IGameCard) {
  return (
    <div
      className={`rounded-lg shadow-lg dark:bg-slate-900`}
      data-testid="game-card-component"
    >
      <img
        src={background_image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg rounded-b-none"
      />
      <div className="p-4 flex flex-col justify-between">
        <Link href={`/game/${id}`}>
          <h4 className="text-sm font-semibold mb-2">{name}</h4>
        </Link>

        <div className="flex overflow-y-auto gap-2">
          {genres?.map((genre) => (
            <span
              key={`genre-${genre.id}`}
              className="border border-gray-600 text-border-gray-600 rounded-md text-[11px] p-1"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <div className="overflow-y-hidden flex gap-2 mt-4">
          {platforms?.map(({ platform }) => (
            <img
              src={platform.image_background}
              key={`platform-${platform.id}`}
              className="rounded-md"
              alt={platform.name}
              width={32}
              height={32}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
