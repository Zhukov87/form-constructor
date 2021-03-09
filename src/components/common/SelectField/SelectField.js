import "./select-field.css";

export const SelectField = ({
  id,
  name,
  label,
  options,
  isRequired,
  activeElement,
}) => (
  <div>
    {label && (
      <p className="select-title">
        {label}
        {isRequired && <span className="select-is-required"> *</span>}
      </p>
    )}
    <select
      name={name}
      className={activeElement === id ? "select-with-settings" : "select"}
      id={id}
    >
      {options.map((option) => (
        <option value={option.value} id={option.id} key={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
