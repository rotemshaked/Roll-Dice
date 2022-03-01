import "./assets/styles.css";
import Player from "./components/player";
import Button from "./components/button";

function App() {
  return (
    <div className="game-screen">
      <div className="buttons">
        <Button className="btn new-game" btnName=" NEW GAME"></Button>
        <div className="bottom-btns">
          <Button className="btn roll-dice" btnName="🎲 ROLL DICE"></Button>
          <Button className="btn hold" btnName="➕ HOLD"></Button>
        </div>
      </div>
      <Player playerSide="left-player" playerName="PLAYER 1" />
      <Player playerSide="right-player" playerName="PLAYER 2" />
    </div>
  );
}

export default App;
