import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
const Editor = (props) => {
  const { displayName, language } = props;
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button className="O-C">O/C</button>
      </div>
      <div className="Code-editor">
        <ControlledEditor
          onBeforeChange={handlechange}
          value={value}
          className="code-mirror-wrap"
          options={{}}
        />
      </div>
    </div>
  );
};

export default Editor;
