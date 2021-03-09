import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    const element = el;

    modalRoot.appendChild(element.current);
    return () => modalRoot.removeChild(element.current);
  }, []);

  return createPortal(children, el.current);
};

export default Modal;
