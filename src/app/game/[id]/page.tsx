"use client";
import GameDetail from "@/components/Games/Detail";
import { useFindById } from "@/services/games";
import { Game } from "@/types/game";
import { useParams } from "next/navigation";

export default function Game() {
  const { id } = useParams();
  const { data, isLoading } = useFindById(id as string);

  return (
    <main className="flex flex-col justify-between p-24 gap-8">
      {isLoading ? (
        <div className="flex justify-center">Loadding...</div>
      ) : (
        <GameDetail game={data || ({} as Game)} />
      )}
    </main>
  );
}
