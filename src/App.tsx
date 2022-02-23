import { useState } from "react";
import "./App.css";

import Guess from "./Guess";

import { validGuesses } from "./validGuesses";
import { setLetterState } from "./setLetterState";

const answer = "swill";

export type GameState = {
  letter: string;
  state: "green" | "gray" | "yellow" | "";
};

function App() {
  const [guessState, setGuessState] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [activeRows, setActiveRows] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [gameState, setGameState] = useState<GameState[][]>([
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
  ]);
  const [showTooFewLettersAlert, setShowTooFewLettersAlert] = useState(false);
  const [showInvalidWordAlert, setshowInvalidWordAlert] = useState(false);

  const handleGuess = (guess: string, index: number, rowIndex: number) => {
    setShowTooFewLettersAlert(false);
    setshowInvalidWordAlert(false);
    let guessStateCopy = guessState.slice();
    guessStateCopy[rowIndex].splice(index, 1, guess);
    setGuessState(guessStateCopy);
  };

  const handleEnter = () => {
    const activeRowIndex = activeRows.indexOf(true);
    const currentGuess = guessState[activeRowIndex].join("").toLowerCase();
    if (currentGuess.length < 5) {
      setShowTooFewLettersAlert(true);
    } else if (!validGuesses.includes(currentGuess)) {
      setshowInvalidWordAlert(true);
    } else {
      const currentRowState = setLetterState(currentGuess, answer);
      const gameStateCopy = gameState.slice();
      gameStateCopy[activeRowIndex] = currentRowState;

      activeRows[activeRowIndex] = false;
      activeRows[activeRowIndex + 1] = true;
      setActiveRows(activeRows);
      setGameState(gameStateCopy);
    }
  };

  return (
    <div className="App">
      <header>Wordle Clone</header>
      {showTooFewLettersAlert && "Too few letters"}
      {showInvalidWordAlert && "Not a valid word"}
      {[0, 1, 2, 3, 4].map((rowIndex) => {
        return (
          <Guess
            gameState={gameState[rowIndex]}
            key={rowIndex}
            onGuess={(g, i) => handleGuess(g, i, rowIndex)}
            active={activeRows[rowIndex]}
            guess={guessState[rowIndex]}
          />
        );
      })}
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
}

export default App;
