import { useEffect, useState } from "react";

import CheckboxField from "../../common/CheckboxField";
import Button from "../../common/Button";

import { generateId } from "../../../utils/generateId";

import "./checkbox-form.css";

export const CheckboxForm = ({
  handleGoBack,
  createElement,
  prefill,
  updateElement,
}) => {
  useEffect(() => {
    if (prefill) {
      setCheckboxName(prefill.attributes.name);
      setCheckboxLabel(prefill.attributes.label);
      setCheckboxIsRequired(prefill.attributes.required);
    }
  }, [prefill]);

  const [checkboxName, setCheckboxName] = useState("");
  const [checkboxLabel, setCheckboxLabel] = useState("");
  const [checkboxIsRequired, setCheckboxIsRequired] = useState(false);

  const handleCreateElement = (e) => {
    e.preventDefault();
    const element = {
      type: "checkbox",
      attributes: {
        name: checkboxName,
        label: checkboxLabel,
        required: checkboxIsRequired,
        id: generateId(),
      },
    };

    createElement(element);
  };

  const handleUpdateElement = (e) => {
    e.preventDefault();
    updateElement({
      name: checkboxName,
      label: checkboxLabel,
      required: checkboxIsRequired,
      id: prefill.attributes.id,
    });
  };

  return (
    <div className="checkbox-form-container">
      <div className="checkbox-view-container">
        <CheckboxField
          name={checkboxName}
          label={checkboxLabel || "Default text"}
          isRequired={checkboxIsRequired}
        />
      </div>
      <form
        onSubmit={prefill ? handleUpdateElement : handleCreateElement}
        className="checkbox-form-settings"
      >
        <input
          type="text"
          placeholder="Enter field name"
          value={checkboxName}
          onChange={(e) => setCheckboxName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter field label"
          value={checkboxLabel}
          onChange={(e) => setCheckboxLabel(e.target.value)}
          required
        />
        <div>
          <input
            type="checkbox"
            name="isRequired"
            value={checkboxIsRequired}
            checked={checkboxIsRequired}
            onChange={() => setCheckboxIsRequired(!checkboxIsRequired)}
          />
          <span> isRequired</span>
        </div>
        <div className="checkbox-form-buttons-container">
          {!prefill && <Button handleClick={handleGoBack}>Go back</Button>}
          <Button type="submit">
            {prefill ? "Update element" : "Create element"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckboxForm;
