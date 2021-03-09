import { useEffect, useState } from "react";

import Button from "../../common/Button";

import { generateId } from "../../../utils/generateId";

import "./button-form.css";

export const ButtonForm = ({
  handleGoBack,
  createElement,
  prefill,
  updateElement,
}) => {
  useEffect(() => {
    if (prefill) {
      setButtonName(prefill.attributes.name);
      setButtonLabel(prefill.attributes.label);
    }
  }, [prefill]);

  const [buttonName, setButtonName] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");

  const handleCreateElement = (e) => {
    e.preventDefault();
    const element = {
      type: "button",
      attributes: {
        type: "submit",
        name: buttonName,
        label: buttonLabel,
        id: generateId(),
      },
    };

    createElement(element);
  };

  const handleUpdateElement = (e) => {
    e.preventDefault();
    updateElement({
      name: buttonName,
      label: buttonLabel,
      id: prefill.attributes.id,
    });
  };

  return (
    <div className="button-form-container">
      <div className="button-view-container">
        <Button name={buttonName} className="button-view-element">
          {buttonLabel || "Submit"}
        </Button>
      </div>
      <form
        onSubmit={prefill ? handleUpdateElement : handleCreateElement}
        className="button-form-settings"
      >
        <input
          type="text"
          placeholder="Enter button name"
          value={buttonName}
          onChange={(e) => setButtonName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter button label"
          value={buttonLabel}
          onChange={(e) => setButtonLabel(e.target.value)}
          required
        />
        <div className="button-form-buttons-container">
          {!prefill && <Button handleClick={handleGoBack}>Go back</Button>}
          <Button type="submit">
            {prefill ? "Update element" : "Create element"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ButtonForm;
