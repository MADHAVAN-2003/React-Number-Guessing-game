import { useState } from "react";
import "./App.css";
import Result from "./Components/Result";
const secretNumber = Math.floor(Math.random() * 10) + 1;

function App() {
  const [guessValue, setGuessValue] = useState(0);
  function handleGuess(e) {
    e.preventDefault();
    setGuessValue(Number(e.target.value));
  }
  return (
    <div className="parent-box">
      <label>Guess the Number from 1 to 10 </label>
      <br />
      <input
        type="text"
        placeholder="Enter You Guess Here"
        onChange={handleGuess}
      />
      {/* <p>Answer :  {secretNumber}</p> for Checking Purpose */}
      <Result guessValue={guessValue} secretNumber={secretNumber} />
    </div>
  );
}

export default App;
