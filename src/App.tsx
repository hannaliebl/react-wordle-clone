import { useState } from "react";
import "./App.css";

import Guess from "./Guess";

const answer = "wight";

function App() {
  const [guessState, setGuessState] = useState<string[][]>([
    ["a", "b", "c", "d", "e"],
    ["d", "d", "d", "d", "g"],
  ]);

  const handleGuess = (guess: string, index: number, rowIndex: number) => {
    let guessStateCopy = guessState.slice();
    guessStateCopy[rowIndex].splice(index, 1, guess);
    setGuessState(guessStateCopy);
  };

  return (
    <div className="App">
      <header>Wordle Clone</header>
      <Guess
        onGuess={(g, i) => handleGuess(g, i, 0)}
        guessed={false}
        guess={guessState[0]}
      />
      <Guess
        onGuess={(g, i) => handleGuess(g, i, 1)}
        guessed={false}
        guess={guessState[1]}
      />
    </div>
  );
}

export default App;
