export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
};

export type NameItemProps = {
  name: string;
  onRemove: () => void;
};
