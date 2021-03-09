import settings from "../../assets/images/settings.png";
import trash from "../../assets/images/trash.svg";

import "./element-wrapper.css";

export const ElementWrapper = ({
  editElement,
  removeElement,
  id,
  children,
  isActive
}) => {
  if(!isActive) {
    return children;
  }
  return (
    <div className="wrapper-container">
      {children}
      <div className="images-container">
        <img
          src={settings}
          alt="settings"
          className="icon"
          onClick={() => editElement(id)}
        />
        <img
          src={trash}
          alt="delete-element"
          className="icon"
          onClick={() => removeElement(id)}
        />
      </div>
    </div>
  );
};

export default ElementWrapper;
