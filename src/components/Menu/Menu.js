import Pad from "../Pad";
import InputForm from "../Forms/InputForm";
import SelectForm from "../Forms/SelectForm";
import CheckboxForm from "../Forms/CheckboxForm";
import ButtonForm from "../Forms/ButtonForm";

import cross from "../../assets/images/close-grey.svg";
import "./menu.css";

export const Menu = ({
  handleClose,
  selectElement,
  selectedElement,
  createElement,
  prefill,
  updateElement,
}) => {
  const handleClick = (type) => {
    selectElement(type);
  };

  const getCreationElementForm = (element) => {
    switch (element) {
      case "input": {
        return (
          <InputForm
            handleGoBack={() => selectElement("")}
            createElement={createElement}
            prefill={prefill}
            updateElement={updateElement}
          />
        );
      }
      case "select": {
        return (
          <SelectForm
            handleGoBack={() => selectElement("")}
            createElement={createElement}
            prefill={prefill}
            updateElement={updateElement}
          />
        );
      }
      case "checkbox": {
        return (
          <CheckboxForm
            handleGoBack={() => selectElement("")}
            createElement={createElement}
            prefill={prefill}
            updateElement={updateElement}
          />
        );
      }
      case "button": {
        return (
          <ButtonForm
            handleGoBack={() => selectElement("")}
            createElement={createElement}
            prefill={prefill}
            updateElement={updateElement}
          />
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="menu">
      <img
        src={cross}
        onClick={() => handleClose(false)}
        alt="cross"
        className="menu-close"
      />
      <h3 className="menu-title">
        {selectedElement ? "Element settings" : "Choose element"}
      </h3>
      {!selectedElement ? (
        <div className="pads-container">
          <Pad title="Input" onClick={handleClick} />
          <Pad title="Select" onClick={handleClick} />
          <Pad title="Checkbox" onClick={handleClick} />
          <Pad title="Button" onClick={handleClick} />
        </div>
      ) : (
        getCreationElementForm(selectedElement)
      )}
    </div>
  );
};

export default Menu;
