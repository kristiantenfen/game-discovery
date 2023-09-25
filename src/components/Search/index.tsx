"use client";
import { useState } from "react";

interface ISearch {
  onChange?: (keyword: string) => void;
  onSubmit?: (keyword: string) => void;
}

export default function Search({ onChange, onSubmit }: ISearch) {
  const [keyword, setKeyword] = useState("");

  const handleOnChange = () => {
    if (typeof onChange === "function") onChange(keyword);
  };
  const handleSearch = () => {
    if (typeof onSubmit === "function") onSubmit(keyword);
  };

  return (
    <input
      className="rounded-md p-2 bg-slate-800 w-1/2"
      onChange={(e) => {
        setKeyword(e.target.value);
        handleOnChange();
      }}
      placeholder="Search"
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.code === "Enter") {
          handleSearch();
        }
      }}
    />
  );
}
