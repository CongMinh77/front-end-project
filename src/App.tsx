import React from "react";
import "./App.css";

const listQuote = [];

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          Our lives begin to end the day we become silent about things that
          matter.
        </div>
        <div id="author">- Martin Luther King Jr.</div>
        <div>
          <a
            href="https://twitter.com/intent/tweet"
            rel="noreferrer"
            target="_blank"
            id="tweet-quote"
          >
            Tag
          </a>
          <button id="new-quote">New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
