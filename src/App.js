import "./assets/styles.css";
import Player from "./components/player";
import Button from "./components/button";
import Dice from "./components/dice";

import { useState } from "react";

const App = () => {
  const [players, setPlayers] = useState({
    player1: {
      name: "Player 1",
      playerSide: "left-player",
    },
    player2: {
      name: "Player 2",
      playerSide: "right-player",
    },
  });
  const [buttons, setButtons] = useState([
    "NEW GAME",
    "🎲 ROLL DICE",
    "➕ END TURN",
  ]);
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
  // check the html value of icons
  // move to another file called message.js inside directory Consts
  const msg = {
    currentPlaying: "current-playing",
    notPlaying: "",
  };

  const classes = {
    gameScreen: "game-screen",
    buttons: "buttons",
    newGame: "new-game",
    bottomBtn: "bottom-btns",
    rollDice: "roll-dice",
    hold: "hold",
    isWinner: "is-winner",
    emptyClass: "",
  };

  return (
    <div className={classes.gameScreen}>
      <div className={classes.buttons}>
        <Button
          className={classes.newGame}
          btnName={buttons[0]}
          onClick={resetGame}
        ></Button>
        {showDice && <Dice diceNumber={diceNumber} />}
        <div className={classes.bottomBtn}>
          <Button
            className={classes.rollDice}
            btnName={buttons[1]}
            onClick={handleTurn}
          ></Button>
          <Button
            className={classes.hold}
            btnName={buttons[2]}
            onClick={endTurn}
          ></Button>
        </div>
      </div>
      <Player
        playerSide={players.player1.playerSide}
        playerName={players.player2.name}
        score={scorePlayer1}
        roll={currentScorePlayer1}
        currentPlaying={player1Turn ? msg.currentPlaying : msg.notPlaying}
        iswinnerName={
          !player1Turn && winnerName
            ? `${classes.isWinner}`
            : `${classes.emptyClass}`
        }
      />
      <Player
        playerSide={players.player2.playerSide}
        playerName={players.player2.name}
        score={scorePlayer2}
        roll={currentScorePlayer2}
        currentPlaying={!player1Turn ? msg.currentPlaying : msg.notPlaying}
        iswinnerName={
          player1Turn && winnerName
            ? `${classes.isWinner}`
            : `${classes.emptyClass}`
        }
      />
    </div>
  );
};

export default App;
