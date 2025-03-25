import { useEffect, useState } from "react";

function getSeed(): number {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
  return dayOfYear;
}

function shuffleArray<T>(arr: T[], seed: number): T[] {
  const array = [...arr];
  const random = (max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  };

  for (let i = array.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const useDailyNameSort = <T>(
  names: T[]
): { fullDailySort: T[]; topFiveSorted: T[] } => {
  const [dailySort, setDailySort] = useState<T[]>([]);

  useEffect(() => {
    const randomSeed = getSeed();
    const sortedList = shuffleArray(names, randomSeed);
    setDailySort(sortedList);
  }, [names]);

  return {
    fullDailySort: dailySort,
    topFiveSorted: dailySort.slice(0, 5),
  };
};
