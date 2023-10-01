"use client";
import GamesList from "@/components/Games/List";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { useList } from "@/services/games";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState({
    search: "",
    ordering: "-rating",
    dates: "2023-01-01",
    page: 1,
    page_size: 10,
  });
  const { data, isLoading } = useList(search);
  const handleSearch = (paginate: object) => {
    setSearch((prevState) => ({ ...prevState, ...paginate }));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <Search onSubmit={(value: string) => handleSearch({ search: value })} />
      {isLoading ? (
        <div className="flex min-h-screen m-32">Loadding...</div>
      ) : (
        <>
          <GamesList data={data} />
          <Pagination
            page={search.page}
            pageSize={search.page_size}
            onChange={handleSearch}
          />
        </>
      )}
    </main>
  );
}
