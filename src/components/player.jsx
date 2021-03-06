import "../assets/styles.css";

const Player = ({
  playerSide,
  playerName,
  score,
  roll,
  currentPlaying,
  iswinnerName,
}) => {
  return (
    <div
      className={`player-board ${playerSide} ${currentPlaying} ${iswinnerName}`}
    >
      <div className="player-name">{playerName}</div>
      <div className="score">{score}</div>
      <div className="current-roll">
        <div className="current">CURRENT TURN SUM</div>
        <div className="roll">{roll}</div>
      </div>
    </div>
  );
};

export default Player;
