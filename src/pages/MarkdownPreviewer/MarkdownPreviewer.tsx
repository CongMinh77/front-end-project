import React from "react";
import "./styles.css";

function MarkdownPreviewer() {
  return (
    <div className="wrapper">
      <div id="editor">
        <textarea id="editor" cols={30} rows={10}></textarea>
      </div>
      <div id="preview">Preview</div>
    </div>
  );
}

export default MarkdownPreviewer;
