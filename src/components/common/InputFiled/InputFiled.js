import "./input-field.css";

export const InputFiled = ({
  id,
  type,
  name,
  label,
  placeholder,
  onChange,
  value,
  isRequired,
  activeElement,
}) => {
  return (
    <div>
      {label && (
        <p className="input-title">
          {label}
          {isRequired && <span className="input-is-required"> *</span>}
        </p>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={isRequired}
        className={activeElement === id ? "input-with-settings" : "input"}
      />
    </div>
  );
};

export default InputFiled;
