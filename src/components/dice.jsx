import "../assets/styles.css";
// import dice_1 from "/public/";
// import dice_2 from "../assets/dice-2.png";
// import dice_3 from "../assets/dice-3.png";
// import dice_4 from "../assets/dice-4.png";
// import dice_5 from "../assets/dice-5.png";
// import dice_6 from "../assets/dice-6.png";

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
