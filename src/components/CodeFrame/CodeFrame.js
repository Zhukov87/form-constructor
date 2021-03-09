import { useEffect, useState } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import prettier from "prettier/standalone";
import parserHtml from 'prettier/parser-html';

import Frame from "../common/Frame";
import Button from "../common/Button";

import "./code-frame.css";

export const CodeFrame = ({ form, css }) => {
  const [currentForm, setCurrentForm] = useState("");
  const [showHtml, setShowHtml] = useState(true);

  useEffect(() => {
    setCurrentForm(document.getElementById("form-result"));
  }, [form.length]);

  return (
    <Frame title="Code">
      <div className="code-container">
        {showHtml ?
          <SyntaxHighlighter language="html" style={xcode}>
            {currentForm && prettier.format(currentForm.outerHTML, { parser: "html", plugins: [parserHtml] })}
          </SyntaxHighlighter>
         : 
          <SyntaxHighlighter language="css" style={xcode}>
            {css}
          </SyntaxHighlighter>}
      </div>
      <div className="code-frame-buttons-container">
        <Button
          handleClick={() => setShowHtml(true)}
          className="code-frame-button"
        >
          Show HTML
        </Button>
        <Button
          handleClick={() => setShowHtml(false)}
          className="code-frame-button"
        >
          Show CSS
        </Button>
      </div>
    </Frame>
  );
};

export default CodeFrame;
