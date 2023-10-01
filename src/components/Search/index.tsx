"use client";
import { useRef, useState } from "react";

interface ISearch {
  onChange?: (keyword: string) => void;
  onSubmit?: (keyword: string) => void;
}

export default function Search({ onChange, onSubmit }: ISearch) {
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const handleOnChange = () => {
    if (typeof onChange === "function") onChange(keyword);
  };
  const handleSearch = () => {
    if (typeof onSubmit === "function") onSubmit(keyword);
  };

  return (
    <input
      data-testid="search-input"
      ref={inputRef}
      aria-label="Search"
      className="rounded-md p-2 bg-gray-100 dark:bg-slate-800 w-1/2"
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
