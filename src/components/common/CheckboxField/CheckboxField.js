import "./checkbox-field.css";

export const CheckboxField = ({ name, label, id, isRequired, activeElement }) => (
  <div className={activeElement === id ? "checkbox-with-settings" : "checkbox"}>
    <input type="checkbox" name={name} required={isRequired} />
    <p className="checkbox-title" id={id}>
      {label}
      {isRequired && <span className="checkbox-is-required"> *</span>}
    </p>
  </div>
);

export default CheckboxField;
