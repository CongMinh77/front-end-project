import "./App.css";
import "./randomQuoteMachine.css";
import RandomQuoteMachine from "./random-quote-machine";
import Markdown from "markdown-to-jsx";
import { useState } from "react";

function App() {
  const defaultPreview = "";
  const [preview, setPreview] = useState<string>(defaultPreview);
  return (
    <div className="App">
      <div>
        <div>
          <textarea
            name="editor"
            id="editor"
            rows={10}
            style={{ width: "100%", height: "100%" }}
            value={preview}
            onChange={(e) => {
              setPreview(e.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <Markdown id="preview">{preview}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
