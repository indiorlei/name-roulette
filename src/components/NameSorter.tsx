"use client";

import { useNames } from "@/hooks/useNames";
import { useRaffle } from "@/hooks/useRaffle";
import { useEffect, useState } from "react";

export const NameSorter = () => {
  const { names } = useNames();
  const { winners } = useRaffle();
  const [sortedNames, setSortedNames] = useState<string[]>(winners);

  useEffect(() => {
    setSortedNames(shuffleAndSlice(names, 5));
  }, [names]);

  const shuffleAndSlice = (array: string[], size: number): string[] => {
    return [...array].sort(() => Math.random() - 0.5).slice(0, size);
  };

  if (names.length === 0) {
    return (
      <div className="text-center text-gray-400">
        Adicione nomes para começar o sorteio
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {sortedNames.length > 0 && (
        <div className="flex flex-col items-center gap-6 w-full">
          <div
            className="text-5xl font-bold text-amber-500 text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg p-6 w-full capitalize"
            aria-live="polite"
          >
            {sortedNames[0]}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {sortedNames.slice(1).map((name, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4 text-gray-200 text-center text-lg flex items-center justify-center gap-2"
                aria-live="polite"
              >
                <span className="text-amber-500 font-medium">{index + 2}º</span>
                <span className="capitalize">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
