import { Game, Screenshot } from "@/types/game";
import Link from "next/link";

interface IGameDetail {
  game: Game;
  screenshots?: Screenshot[];
}

export default function GameDetail({ game, screenshots = [] }: IGameDetail) {
  return (
    <div className="p-4" data-testid="game-detail-component">
      <img
        src={game?.background_image}
        alt={game?.name}
        className="h-64 rounded-lg"
      />
      <h3 className="text-xl font-semibold mb-2 mt-4">{game?.name}</h3>
      <div className="flex gap-4">
        <div className="flex flex-col mb-4">
          <span className="text-sm text-slate-500">Rating</span>
          <span className="text-lg"> {game?.rating}</span>
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-sm text-slate-500">Relesed</span>
          <span className="text-lg"> {game?.released}</span>
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-sm text-slate-500">Genres</span>
          <div className="flex mt-2 mb-4  gap-2">
            {game?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="inline-block whitespace-nowrap rounded-full bg-neutral-50 dark:bg-gray-900 dark:text-gray-500 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[13px] font-bold leading-none text-neutral-600"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="dark:text-gray-400 text-gray-700">
        {game?.description_raw}
      </p>
      <div className="flex flex-col mb-4 mt-4 gap-2">
        <span className="text-sm text-slate-500">Screenshots</span>

        <div className="flex gap-4 overflow-y-auto">
          {screenshots?.map((screenshot) => (
            <img
              key={screenshot.id}
              className="object-cover rounded-lg"
              src={screenshot.image}
              alt={`${screenshot.id}`}
              width={256}
              height={256}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-4 mt-4 gap-2">
        <span className="text-sm text-slate-500">Available platforms</span>
        <div className="flex flex-row flex-wrap mb-4">
          {game?.platforms.map(({ platform }) => (
            <div
              key={platform.id}
              data-te-chip-init
              data-te-ripple-init
              className="[word-wrap: break-word] my-[5px] mr-2 flex h-[24px] cursor-pointer items-center justify-between rounded-[16px] bg-gray-200 dark:bg-gray-900 dark:text-gray-500 px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
              data-te-close="true"
            >
              {platform.name}
            </div>
          ))}
        </div>
      </div>
      {game?.stores ? (
        <div className="flex flex-col mb-4 mt-6">
          <span className="text-sm text-slate-500">Stores</span>
          <div className="flex gap-4">
            {game?.stores.map(({ store }) => (
              <Link
                key={store.id}
                href={`https://${store.domain}`}
                target="_blank"
              >
                <div className="dark:bg-slate-800 bg-gray-200 rounded-lg">
                  <img
                    className="w-full h-40 object-cover rounded-lg rounded-b-none"
                    src={store.image_background}
                    alt={store.name}
                    title={store.name}
                    width={64}
                  />
                  <div className="p-2">
                    <span key={store.id} className="text-sm">
                      {store.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
