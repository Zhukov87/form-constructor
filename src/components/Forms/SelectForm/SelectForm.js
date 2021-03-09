import { useEffect, useState } from "react";

import SelectField from "../../common/SelectField";
import Button from "../../common/Button";

import { generateId } from "../../../utils/generateId";

import "./select-form.css";

export const SelectForm = ({
  handleGoBack,
  createElement,
  prefill,
  updateElement,
}) => {
  useEffect(() => {
    if (prefill) {
      setSelectName(prefill.attributes.name);
      setSelectLabel(prefill.attributes.label);
      setSelectIsRequired(prefill.attributes.required);
      setSelectOptions(prefill.attributes.options);
    }
  }, [prefill]);

  const [selectName, setSelectName] = useState("");
  const [selectLabel, setSelectLabel] = useState("");
  const [selectIsRequired, setSelectIsRequired] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  const handleCreateElement = (e) => {
    e.preventDefault();
    const element = {
      type: "select",
      attributes: {
        name: selectName,
        label: selectLabel,
        required: selectIsRequired,
        id: generateId(),
        options: selectOptions,
      },
    };

    createElement(element);
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (selectOption) {
      setSelectOptions((prevOptions) => [
        ...prevOptions,
        { value: selectOption, id: generateId() },
      ]);
      setSelectOption("");
    }
  };

  const handleResetOptions = (e) => {
    e.preventDefault();
    setSelectOptions([]);
  };

  const handleUpdateElement = (e) => {
    e.preventDefault();
    updateElement({
      name: selectName,
      label: selectLabel,
      required: selectIsRequired,
      options: selectOptions,
      id: prefill.attributes.id,
    });
  };

  return (
    <div className="select-form-container">
      <div className="select-view-container">
        <SelectField
          name={selectName}
          label={selectLabel}
          options={selectOptions}
          isRequired={selectIsRequired}
        />
      </div>
      <form
        onSubmit={prefill ? handleUpdateElement : handleCreateElement}
        className="select-form-settings"
      >
        <input
          type="text"
          placeholder="Enter field name"
          value={selectName}
          onChange={(e) => setSelectName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter field label"
          value={selectLabel}
          onChange={(e) => setSelectLabel(e.target.value)}
          required
        />
        <div>
          <input
            type="text"
            placeholder="Enter option value"
            onChange={(e) => setSelectOption(e.target.value)}
            value={selectOption}
          />
          <button onClick={handleAddOption}>Add option</button>
          <button onClick={handleResetOptions}>Reset options</button>
        </div>
        <div>
          <input
            type="checkbox"
            name="isRequired"
            value={selectIsRequired}
            checked={selectIsRequired}
            onChange={() => setSelectIsRequired(!selectIsRequired)}
          />
          <span> isRequired</span>
        </div>
        <div className="select-form-buttons-container">
          {!prefill && <Button handleClick={handleGoBack}>Go back</Button>}
          <Button type="submit">
            {prefill ? "Update element" : "Create element"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SelectForm;
