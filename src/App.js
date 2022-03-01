import "./assets/styles.css";
import Player from "./components/player";
import Button from "./components/button";
import Dice from "./components/dice";
import { useState } from "react";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const handleRollDiceClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
    console.log(randomNumber);
  };

  return (
    <div className="game-screen">
      <div className="buttons">
        <Button className="btn new-game" btnName=" NEW GAME"></Button>
        <Dice diceNumber={diceNumber} />
        <div className="bottom-btns">
          <Button
            className="btn roll-dice"
            btnName="🎲 ROLL DICE"
            onClick={handleRollDiceClick}
          ></Button>
          <Button className="btn hold" btnName="➕ HOLD"></Button>
        </div>
      </div>
      <Player playerSide="left-player" playerName="PLAYER 1" />
      <Player playerSide="right-player" playerName="PLAYER 2" />
    </div>
  );
}

export default App;
