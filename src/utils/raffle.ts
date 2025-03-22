export function getDateSeed(): number {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

export function shuffleNames(names: string[], seed: number): string[] {
  const random = Math.sin(seed) * 10000;
  return [...names].sort(() => random - 0.5);
}

export function getWinners(names: string[]): string[] {
  const seed = getDateSeed();
  const shuffledNames = shuffleNames(names, seed);
  return shuffledNames.slice(0, 5);
} 