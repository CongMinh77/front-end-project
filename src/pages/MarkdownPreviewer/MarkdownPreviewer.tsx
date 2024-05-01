import React, { useState } from "react";
import "./styles.css";
import Markdown from "markdown-to-jsx";

function MarkdownPreviewer() {
  const [previewData, setPreviewData] = useState("");

  return (
    <div className="wrapper">
      <div>
        <textarea onChange={(e) => setPreviewData(e.target.value)} id="editor" cols={30} rows={10}></textarea>
      </div>
      <Markdown id="preview">{previewData}</Markdown>
    </div>
  );
}

export default MarkdownPreviewer;
