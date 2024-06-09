import React, { useState } from "react";
import "./styles.css";
import { marked } from "marked";

function MarkdownPreviewer() {
  const loadText = `paragraph
  **bolded**
# h1
## h2
[google](google.com)
 - list item 1
 - list item 2
 
this is a inline \`<div></div>\`

this is a block of code

\`\`\`
let x = 1
\`\`\`

> First line
> Another line
>
> > Nested line
>
> Last line

![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;

  const [previewData, setPreviewData] = useState(loadText);

  const markdown = marked(previewData, { breaks: true, gfm: true });
  return (
    <div className="wrapper">
      <div className="container">
        <div className="toolbar">Editor</div>
        <textarea onChange={(e) => setPreviewData(e.target.value)} id="editor" cols={50} rows={10}>
          {previewData}
        </textarea>
      </div>
      <div className="container previewWrap">
        <div className="toolbar">Previewer</div>
        <div dangerouslySetInnerHTML={{ __html: markdown as string }} id="preview"></div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
