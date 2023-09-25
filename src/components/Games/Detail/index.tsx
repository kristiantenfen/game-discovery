import { useScreenshotsById } from "@/services/games";
import { Game } from "@/types/game";
import Link from "next/link";

interface IGameDetail {
  game: Game;
}

export default function GameDetail({ game }: IGameDetail) {
  const { data: screenshots, isLoading: isScreenshotsLoading } =
    useScreenshotsById(game.id as string);
  return (
    <>
      <Link
        href="/
    "
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>{" "}
      </Link>
      <div className="p-4">
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
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-sm text-slate-500">Genres</span>
          <div className="flex mt-2 mb-4  gap-2">
            {game?.genres.map((genre) => (
              <span
                key={genre.id}
                className="inline-block whitespace-nowrap rounded-full bg-neutral-50 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-600"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-300">{game?.description_raw}</p>
        <div className="flex flex-col mb-4 mt-4">
          <span className="text-sm text-slate-500">Screenshots</span>
          {isScreenshotsLoading ? (
            <div className="flex justify-center">Loading</div>
          ) : (
            <div className="flex gap-4 overflow-y-auto">
              {screenshots?.map((screenshot) => (
                <img
                  key={screenshot.id}
                  className="object-cover rounded-lg"
                  src={screenshot.image}
                  alt={screenshot.id}
                  width={256}
                  height={256}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col mb-4 mt-4">
          <span className="text-sm text-slate-500">Available platforms</span>
          <div className="flex flex-row flex-wrap mb-4">
            {game?.platforms.map(({ platform }) => (
              <div
                key={platform.id}
                data-te-chip-init
                data-te-ripple-init
                className="[word-wrap: break-word] my-[5px] mr-2 flex h-[24px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                data-te-close="true"
              >
                {platform.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-4 mt-6">
          <span className="text-sm text-slate-500">Stores</span>
          <div className="flex gap-4">
            {game?.stores.map(({ store }) => (
              <Link
                key={store.id}
                href={`https://${store.domain}`}
                target="_blank"
              >
                <div className="bg-slate-800 rounded-lg">
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
      </div>
    </>
  );
}
