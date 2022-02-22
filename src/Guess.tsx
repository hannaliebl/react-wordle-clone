import classNames from "classnames";
import type { GameState } from "./App";
import "./Guess.css";

interface GuessProps {
  onGuess: (guess: string, index: number) => void;
  active: boolean;
  guess: string[];
  gameState: GameState[];
}

export const Guess = ({ onGuess, active, guess, gameState }: GuessProps) => {
  return (
    <div>
      {active ? (
        <>
          <input
            className="word-input"
            type="text"
            value={guess[0]}
            onChange={(e) => onGuess(e.target.value, 0)}
          />
          <input
            className="word-input"
            type="text"
            value={guess[1]}
            onChange={(e) => onGuess(e.target.value, 1)}
          />
          <input
            className="word-input"
            type="text"
            value={guess[2]}
            onChange={(e) => onGuess(e.target.value, 2)}
          />
          <input
            className="word-input"
            type="text"
            value={guess[3]}
            onChange={(e) => onGuess(e.target.value, 3)}
          />
          <input
            className="word-input"
            type="text"
            value={guess[4]}
            onChange={(e) => onGuess(e.target.value, 4)}
          />
        </>
      ) : (
        <>
          {gameState.map((s, i) => {
            return (
              <span
                key={i}
                className={classNames("letter", {
                  "gray-letter": s.state === "gray",
                  "yellow-letter": s.state === "yellow",
                  "green-letter": s.state === "green",
                })}
              >
                {s.letter}
              </span>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Guess;
