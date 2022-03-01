import "../assets/styles.css";

const Button = ({ btnName, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {btnName}
    </button>
  );
};

export default Button;
