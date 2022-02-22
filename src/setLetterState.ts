import type { GameState } from "./App";

export const setLetterState = (guess: string, answer: string): GameState[] => {
  const guessArr = guess.split("");
  const answerArr = answer.split("");
  if (guess === answer) {
    answerArr.map((l) => {
      return { letter: l, state: "green" }
    })
  }
  return guessArr.map((l, i) => {
    if (answerArr.includes(l) && answerArr.indexOf(l) === i) {
      // I think this fixes issue when letter comes up again in guess and
      // shows up as yellow, but need more test cases
      delete answerArr[i];
      return { letter: l, state: "green" }
    }
    if (answerArr.includes(l) && answerArr.indexOf(l) !== i) {
      return { letter: l, state: "yellow" }
    }
    return { letter: l, state: "gray" }
  })
}