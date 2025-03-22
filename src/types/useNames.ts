export type UseNamesReturn = {
  names: string[];
  addName: (name: string) => void;
  removeName: (nameToRemove: string) => void;
  clearNames: () => void;
};
