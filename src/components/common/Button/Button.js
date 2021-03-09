import "./button.css";

export const Button = ({
  children,
  handleClick,
  className,
  type,
  name,
  id,
}) => (
  <button
    type={type}
    onClick={handleClick}
    className={className || "button"}
    name={name}
    id={id}
  >
    {children}
  </button>
);

export default Button;
