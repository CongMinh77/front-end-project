import React, { useState } from "react";
import "./App.css";
import listQuote from "./quote.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
const randomQuoteIndex = Math.ceil(Math.random() * listQuote.quotes.length) - 1;

const getRandomQuote = () => {
  const randomQuoteIndex =
    Math.ceil(Math.random() * listQuote.quotes.length) - 1;
  return listQuote.quotes[randomQuoteIndex];
};

function App() {
  const [quote, setQuote] = useState<{ quote: string; author: string }>(
    listQuote.quotes[randomQuoteIndex]
  );

  const randomColorIndex = Math.ceil(Math.random() * colors.length) - 1;

  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${colors[colorIndex]}`,
        color: `${colors[colorIndex]}`,
      }}
    >
      <div id="quote-box">
        <div id="wrap-quote">
          <div id="text">{quote.quote}</div>
          <div id="author">- {quote.author}</div>

          <div className="wrap-button">
            <a
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
                `"` +
                quote.quote +
                `" - ` +
                quote.author
              }
              rel="noreferrer"
              target="_blank"
              id="tweet-quote"
              style={{ backgroundColor: `${colors[colorIndex]}` }}
            >
              .
            </a>
            <button
              id="new-quote"
              style={{ backgroundColor: `${colors[colorIndex]}` }}
              onClick={() => {
                setQuote(getRandomQuote);
                setColorIndex(randomColorIndex);
              }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
