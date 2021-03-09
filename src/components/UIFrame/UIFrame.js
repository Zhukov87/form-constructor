import Frame from "../common/Frame";
import Button from "../common/Button";
import FormResult from "../Forms/FormResult";
import InputFiled from "../common/InputFiled";
import SelectField from "../common/SelectField";
import CheckboxField from "../common/CheckboxField";
import ElementWrapper from "../ElementWrapper";

import "./ui-frame.css";

export const UIFrame = ({
  handleOpenModal,
  editElement,
  removeElement,
  form,
  activeElement,
  setActiveElement,
  setFormCss,
}) => {
  const getElements = (elem) => {
    switch (elem.type) {
      case "input": {
        return (
          <InputFiled
            id={elem.attributes.id}
            type={elem.attributes.type}
            placeholder={elem.attributes.placeholder}
            isRequired={elem.attributes.required}
            name={elem.attributes.name}
            label={elem.attributes.label}
            activeElement={activeElement}
          />
        );
      }
      case "select": {
        return (
          <SelectField
            id={elem.attributes.id}
            isRequired={elem.attributes.required}
            name={elem.attributes.name}
            label={elem.attributes.label}
            options={elem.attributes.options}
            activeElement={activeElement}
          />
        );
      }
      case "checkbox": {
        return (
          <CheckboxField
            id={elem.attributes.id}
            isRequired={elem.attributes.required}
            name={elem.attributes.name}
            label={elem.attributes.label}
            activeElement={activeElement}
          />
        );
      }
      case "button": {
        return (
          <Button id={elem.attributes.id} name={elem.attributes.name}>
            {elem.attributes.label}
          </Button>
        );
      }
      default: {
        return null;
      }
    }
  };

  const renderForm = () => {
    return form.map((elem) => {
      return (
        <ElementWrapper
          key={elem.attributes.id}
          id={elem.attributes.id}
          editElement={editElement}
          removeElement={removeElement}
          isActive={activeElement === elem.attributes.id}
        >
          {getElements(elem)}
        </ElementWrapper>
      );
    });
  };

  return (
    <Frame title="Form">
      <FormResult setActiveElement={setActiveElement} setFormCss={setFormCss}>
        {renderForm()}
      </FormResult>
      <Button
        handleClick={() => handleOpenModal(true)}
        className="ui-frame-button"
      >
        Add element
      </Button>
    </Frame>
  );
};

export default UIFrame;
