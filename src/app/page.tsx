"use client";
import GamesList from "@/components/Games/List";
import Search from "@/components/Search";
import { useList } from "@/services/games";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useList({
    search,
    ordering: "-rating",
    dates: "2023-01-01",
  });
  const handleSearch = (keyword: string) => {
    setSearch(keyword);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <Search onSubmit={handleSearch} />
      {isLoading ? <>Loadding...</> : <GamesList data={data} />}
    </main>
  );
}
