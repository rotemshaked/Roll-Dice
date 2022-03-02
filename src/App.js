import "./assets/styles.css";
import Player from "./components/player";
import Button from "./components/button";
import Dice from "./components/dice";
import { useState } from "react";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [currentPlayer1Score, setCurrentPlayer1Score] = useState(0);
  const [currentPlayer2Score, setCurrentPlayer2Score] = useState(0);
  const [diceExist, setDiceExist] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [winner, setWinner] = useState(false);

  const handleRollDice = () => {
    if (!winner) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNumber);
      setDiceExist(true);
      if (player1Turn) {
        if (randomNumber === 1) {
          setScorePlayer1(0);
          setCurrentPlayer1Score(0);
          setPlayer1Turn(!player1Turn);
        } else {
          setCurrentPlayer1Score((randomNumber += currentPlayer1Score));
        }
      } else {
        if (randomNumber === 1) {
          setScorePlayer2(0);
          setCurrentPlayer2Score(0);
          setPlayer1Turn(!player1Turn);
        } else {
          setCurrentPlayer2Score((randomNumber += currentPlayer2Score));
        }
      }
    }
  };

  const handleHoldClick = () => {
    if (!winner) {
      if (player1Turn) {
        let current = scorePlayer1 + currentPlayer1Score;
        setScorePlayer1(current);
        setPlayer1Turn(!player1Turn);
        setCurrentPlayer1Score(0);
        if (current > 30) {
          setDiceExist(false);
          setWinner(true);
        }
      } else {
        let current = scorePlayer2 + currentPlayer2Score;
        setScorePlayer2(current);
        setPlayer1Turn(!player1Turn);
        setCurrentPlayer2Score(0);
        if (current > 30) {
          setDiceExist(false);
          setWinner(true);
        }
      }
    }
  };

  const newGame = () => {
    setCurrentPlayer1Score(0);
    setCurrentPlayer2Score(0);
    setScorePlayer1(0);
    setScorePlayer2(0);
    setDiceExist(false);
    setPlayer1Turn(true);
    setWinner(false);
  };

  return (
    <div className="game-screen">
      <div className="buttons">
        <Button
          className="btn new-game"
          btnName=" NEW GAME"
          onClick={newGame}
        ></Button>
        {diceExist && <Dice diceNumber={diceNumber} />}
        <div className="bottom-btns">
          <Button
            className="btn roll-dice"
            btnName="🎲 ROLL DICE"
            onClick={handleRollDice}
          ></Button>
          <Button
            className="btn hold"
            btnName="➕ HOLD"
            onClick={handleHoldClick}
          ></Button>
        </div>
      </div>
      <Player
        playerSide="left-player"
        playerName="PLAYER 1"
        score={scorePlayer1}
        roll={currentPlayer1Score}
        currentPlaying={player1Turn ? "current-playing" : ""}
        isWinner={!player1Turn && winner ? "is-winner" : ""}
      />
      <Player
        playerSide="right-player"
        playerName="PLAYER 2"
        score={scorePlayer2}
        roll={currentPlayer2Score}
        currentPlaying={!player1Turn ? "current-playing" : ""}
        isWinner={player1Turn && winner ? "is-winner" : ""}
      />
    </div>
  );
}

export default App;
