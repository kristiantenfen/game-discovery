"use client";
import GameDetail from "@/components/Games/Detail";
import { useFindById, useScreenshotsById } from "@/services/games";
import { Game, Screenshot } from "@/types/game";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Game() {
  const { id } = useParams();
  const { data, isLoading } = useFindById(id as string);

  const { data: screenshots } = useScreenshotsById(id as string);
  return (
    <main className="flex flex-col justify-between p-24 gap-8">
      {isLoading ? (
        <div className="flex min-h-screen m-32">Loadding...</div>
      ) : (
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
          <GameDetail
            game={data || ({} as Game)}
            screenshots={screenshots || ([] as Screenshot[])}
          />
        </>
      )}
    </main>
  );
}
