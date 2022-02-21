interface GuessProps {
  onGuess: (guess: string, index: number) => void;
  guessed: boolean;
  guess: string[];
}

export const Guess = ({ onGuess, guessed, guess }: GuessProps) => {
  return (
    <div>
      <input
        disabled={guessed}
        type="text"
        value={guess[0]}
        onChange={(e) => onGuess(e.target.value, 0)}
      />
      <input
        disabled={guessed}
        type="text"
        value={guess[1]}
        onChange={(e) => onGuess(e.target.value, 1)}
      />
      <input
        disabled={guessed}
        type="text"
        value={guess[2]}
        onChange={(e) => onGuess(e.target.value, 2)}
      />
      <input
        disabled={guessed}
        type="text"
        value={guess[3]}
        onChange={(e) => onGuess(e.target.value, 3)}
      />
      <input
        disabled={guessed}
        type="text"
        value={guess[4]}
        onChange={(e) => onGuess(e.target.value, 4)}
      />
    </div>
  );
};

export default Guess;
