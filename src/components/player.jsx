import "../assets/styles.css";

const Player = ({ playerSide, playerName }) => {
  let score = "0";
  let roll = 6;
  return (
    <div className={`player-board ${playerSide}`}>
      <div className="player-name">{playerName}</div>
      <div className="score">{score}</div>
      <div className="current-roll">
        <div className="current">CURRENT</div>
        <div className="roll">{roll}</div>
      </div>
    </div>
  );
};

export default Player;
