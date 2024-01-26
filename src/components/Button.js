import "./Button.scss";

const Button = (props) => {
  const { iconImage, iconAlt, iconClassName, buttonClassName, label } = props;

  return (
    <button className={buttonClassName}>
      <img src={iconImage} alt={iconAlt} className={iconClassName}></img>
      {label}
    </button>
  );
};

export default Button;
