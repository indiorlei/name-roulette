import { UseNamesReturn } from "@/types/useNames";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "roulette_names";

const decodeNamesFromUrl = (namesParam: string): string[] => {
  return decodeURIComponent(namesParam).split(",");
};

const encodeNamesForUrl = (names: string[]): string => {
  return encodeURIComponent(names.join(","));
};

const loadNamesFromStorage = (): string[] => {
  const storedNames = localStorage.getItem(STORAGE_KEY);
  return storedNames ? JSON.parse(storedNames) : [];
};

const saveNamesToStorage = (names: string[]): void => {
  if (names.length > 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const updateUrlWithNames = (
  router: ReturnType<typeof useRouter>,
  searchParams: ReturnType<typeof useSearchParams>,
  names: string[]
): void => {
  const params = new URLSearchParams(searchParams.toString());

  if (names.length > 0) {
    params.set("names", encodeNamesForUrl(names));
  } else {
    params.delete("names");
  }

  router.push(`?${params.toString()}`);
};

export const useNames = (): UseNamesReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    const namesParam = searchParams.get("names");

    if (namesParam) {
      const decodedNames = decodeNamesFromUrl(namesParam);
      setNames(decodedNames);
      saveNamesToStorage(decodedNames);
    } else {
      const storedNames = loadNamesFromStorage();
      if (storedNames.length > 0) {
        setNames(storedNames);
        updateUrlWithNames(router, searchParams, storedNames);
      }
    }
  }, [searchParams, router]);

  useEffect(() => {
    saveNamesToStorage(names);
    updateUrlWithNames(router, searchParams, names);
  }, [names, router, searchParams]);

  const addName = (name: string): void => {
    const trimmedName = name.trim();
    if (trimmedName && !names.includes(trimmedName)) {
      setNames((prev) => [...prev, trimmedName]);
    }
  };

  const removeName = (nameToRemove: string): void => {
    setNames((prev) => prev.filter((name) => name !== nameToRemove));
  };

  const clearNames = (): void => {
    setNames([]);
  };

  return {
    names,
    addName,
    removeName,
    clearNames,
  };
};
