import React from "react";

type Props = {};
type KeyPlays = {
  label: string;
};

const keyPlays: KeyPlays[] = [
  { label: "Q" },
  { label: "W" },
  { label: "E" },
  { label: "A" },
  { label: "S" },
  { label: "D" },
  { label: "Z" },
  { label: "X" },
  { label: "C" },
];

export default function DrumMachine({}: Props) {
  return (
    <div className="inner-container" id="drum-machine">
      <div id="display">
        {keyPlays.map((keyPlay, key) => {
          return (
            <button key={key} className="drum-pad">
              {keyPlay.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
