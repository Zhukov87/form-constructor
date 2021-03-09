import { useEffect, useState } from "react";

import InputFiled from "../../common/InputFiled";
import Button from "../../common/Button";

import { generateId } from "../../../utils/generateId";

import "./input-form.css";

const INPUT_TYPES = ["text", "email", "phone", "number"];

export const InputForm = ({
  handleGoBack,
  createElement,
  prefill,
  updateElement,
}) => {
  useEffect(() => {
    if (prefill) {
      setInputName(prefill.attributes.name);
      setInputLabel(prefill.attributes.label);
      setInputPlaceholder(prefill.attributes.placeholder);
      setInputType(prefill.attributes.type);
      setInputIsRequired(prefill.attributes.required);
    }
  }, [prefill]);

  const [inputName, setInputName] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [inputIsRequired, setInputIsRequired] = useState(false);

  const handleCreateElement = (e) => {
    e.preventDefault();
    const element = {
      type: "input",
      attributes: {
        name: inputName,
        label: inputLabel,
        type: inputType,
        placeholder: inputPlaceholder,
        required: inputIsRequired,
        id: generateId(),
      },
    };

    createElement(element);
  };

  const handleUpdateElement = (e) => {
    e.preventDefault();
    updateElement({
      name: inputName,
      label: inputLabel,
      type: inputType,
      placeholder: inputPlaceholder,
      required: inputIsRequired,
      id: prefill.attributes.id,
    });
  };

  return (
    <div className="input-form-container">
      <div className="input-view-container" id={"new-input"}>
        <InputFiled
          name={inputName}
          label={inputLabel}
          type={inputType}
          placeholder={inputPlaceholder}
          isRequired={inputIsRequired}
        />
      </div>
      <form
        onSubmit={prefill ? handleUpdateElement : handleCreateElement}
        className="input-form-settings"
      >
        <input
          type="text"
          placeholder="Enter field name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter field label"
          value={inputLabel}
          onChange={(e) => setInputLabel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter placeholder"
          value={inputPlaceholder}
          onChange={(e) => setInputPlaceholder(e.target.value)}
        />
        <select onChange={(e) => setInputType(e.target.value)} value={inputType || "default"} required>
          <option disabled value="default">
            Choose type of input
          </option>
          {INPUT_TYPES.map((type, index) => (
            <option
              value={type}
              key={index}
            >
              {type}
            </option>
          ))}
        </select>
        <div>
          <input
            type="checkbox"
            name="isRequired"
            value={inputIsRequired}
            checked={inputIsRequired}
            onChange={() => setInputIsRequired(!inputIsRequired)}
          />
          <span> isRequired</span>
        </div>
        <div className="input-form-buttons-container">
          {!prefill && <Button handleClick={handleGoBack}>Go back</Button>}
          <Button type="submit">
            {prefill ? "Update element" : "Create element"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
