import "../assets/styles.css";

const Dice = ({ diceNumber }) => {
  return (
    <div className="dice">
      <img
        src={`/images/dice-${diceNumber}.png`}
        alt={`dice - ${diceNumber}`}
      />
    </div>
  );
};

export default Dice;
