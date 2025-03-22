interface WinnerListProps {
  winners: string[];
}

export function WinnerList({ winners }: WinnerListProps) {
  return (
    <div>
      {winners.map((winner, index) => (
        <div key={index}>
          <h2>{winner}</h2>
        </div>
      ))}
    </div>
  );
} 