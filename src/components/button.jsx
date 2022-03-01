import "../assets/styles.css";

const Button = ({ btnName, className }) => {
  return <button className={className}>{btnName}</button>;
};

export default Button;
