import React from "react";
import Editor from "./Components/Editor";
function App() {
  return <>
  <div className="Editor-set">
    <Editor/>
    <Editor/>
    <Editor/>
  </div>
  <div className="output-set">
    <iframe title="output" sandbox="allow-scripts" width={100} height={100} frameborder="0"/>
  </div>
  </>;
}

export default App;
