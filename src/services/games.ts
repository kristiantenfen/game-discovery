import { Game, Screenshot } from "@/types/game";
import { useEffect, useState } from "react";

export const useList = (params: {
  search: string;
  dates: string;
  ordering: string;
}) => {
  const [data, setData] = useState<Game[]>([]);
  const [meta, setMeta] = useState<object>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const query = params ? new URLSearchParams(params) : "";
    fetch(`/api/games?${query}`)
      .then((response) => response.json())
      .then(({ results, previous, next, count }) => {
        setData(results);
        setMeta({ previous, next, count });
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [params]);

  return { data, meta, isLoading, error };
};

export const useFindById = (id: string) => {
  const [data, setData] = useState<Game>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/games/${id}`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, isLoading, error };
};

export const useScreenshotsById = (id: string) => {
  const [data, setData] = useState<Screenshot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState();
  const [meta, setMeta] = useState<object>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/games/screenshots/${id}`)
      .then((response) => response.json())
      .then(({ results, previous, next, count }) => {
        setData(results);
        setMeta({ previous, next, count });
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, isLoading, error, meta };
};

export const useAdditionsById = (id: string) => {
  const [data, setData] = useState<Screenshot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState();
  const [meta, setMeta] = useState<object>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/games/additions/${id}`)
      .then((response) => response.json())
      .then(({ results, previous, next, count }) => {
        setData(results);
        setMeta({ previous, next, count });
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, isLoading, error, meta };
};
