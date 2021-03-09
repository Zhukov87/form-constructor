import React, { useEffect, useRef } from "react";

import extractCSS from "component-css-extractor";

import "./form-result.css";

export const FormResult = ({ setActiveElement, setFormCss, children }) => {
  const formRef = useRef();

  useEffect(() => {
    setFormCss(extractCSS(formRef.current));
  }, [children, setFormCss]);
  return (
    <form
      id="form-result"
      ref={formRef}
      className="form-result"
      onClick={(e) => {
        setActiveElement(e.target.id);
      }}
    >
      {children}
    </form>
  );
};

export default FormResult;
