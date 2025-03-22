export type DateFormat = {
  weekday: 'long' | 'short' | 'narrow';
  year: 'numeric' | '2-digit';
  month: 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
};

export const DATE_FORMAT_OPTIONS: DateFormat = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}; 