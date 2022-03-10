import "./assets/styles.css";
import Player from "./components/player";
import Button from "./components/button";
import Dice from "./components/dice";

import { useState } from "react";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [currentScorePlayer1, setcurrentScorePlayer1] = useState(0);
  const [currentScorePlayer2, setcurrentScorePlayer2] = useState(0);
  const [showDice, setShowDice] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [winnerName, setWinnerName] = useState(undefined);

  const handleTurn = () => {
    if (!winnerName) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNumber);
      setShowDice(true);
      currentPlaying(randomNumber);
    }
  };

  const currentPlaying = (randomNumber) => {
    if (randomNumber === 1) {
      player1Turn
        ? setScorePlayer1(0) && setcurrentScorePlayer1(0)
        : setScorePlayer2(0) && setcurrentScorePlayer2(0);
      setPlayer1Turn(!player1Turn);
    } else if (!winnerName) {
      player1Turn
        ? setcurrentScorePlayer1((randomNumber += currentScorePlayer1))
        : setcurrentScorePlayer2((randomNumber += currentScorePlayer2));
    }
  };

  const endTurn = () => {
    if (!winnerName) {
      scores();
    }
  };

  const scores = (player) => {
    let current = player1Turn
      ? scorePlayer1 + currentScorePlayer1
      : scorePlayer2 + currentScorePlayer2;
    player1Turn ? setScorePlayer1(current) : setScorePlayer2(current);
    setPlayer1Turn(!player1Turn);
    player1Turn ? setcurrentScorePlayer1(0) : setcurrentScorePlayer2(0);
    if (current >= 30) {
      setShowDice(false);
      player1Turn ? setWinnerName(`player 1`) : setWinnerName(`player 2`);
    }
  };

  const resetGame = () => {
    setcurrentScorePlayer1(0);
    setcurrentScorePlayer2(0);
    setScorePlayer1(0);
    setScorePlayer2(0);
    setShowDice(false);
    setPlayer1Turn(true);
    setWinnerName(undefined);
  };
  // check if there is a way to use a variable as className
  // remove prefixes from classes for example: "btn"
  // check the html value of icons
  // move to another file called message.js inside directory Consts
  const msg = {
    currentPlaying: "current-playing",
    notPlaying: "",
  };
  return (
    <div className="game-screen">
      <div className="buttons">
        <Button
          className="btn new-game"
          btnName="NEW GAME"
          onClick={resetGame}
        ></Button>
        {showDice && <Dice diceNumber={diceNumber} />}
        <div className="bottom-btns">
          <Button
            className="btn roll-dice"
            btnName="🎲 ROLL DICE"
            onClick={handleTurn}
          ></Button>
          <Button
            className="btn hold"
            btnName="➕ END TURN"
            onClick={endTurn}
          ></Button>
        </div>
      </div>
      <Player
        playerSide="left-player"
        playerName="PLAYER 1"
        score={scorePlayer1}
        roll={currentScorePlayer1}
        currentPlaying={player1Turn ? msg.currentPlaying : msg.notPlaying}
        iswinnerName={!player1Turn && winnerName ? "is-winner" : ""}
      />
      <Player
        playerSide="right-player"
        playerName="PLAYER 2"
        score={scorePlayer2}
        roll={currentScorePlayer2}
        // change text to variable
        currentPlaying={!player1Turn ? msg.currentPlaying : msg.notPlaying}
        iswinnerName={player1Turn && winnerName ? "is-winner" : ""}
      />
    </div>
  );
};

export default App;
