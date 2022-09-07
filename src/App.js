import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😎": "awesome",
  "😂": "laughing with tears",
  "😴": "sleeping face",
  "😨": "fearful face",
  "🥰": "lovely",
  "🤔": "curious",
  "🤐": "speechless",
  "🤑": "rich",
  "🤣": "extremly hillarious",
  "😜": "mischivious"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning}</h2>
      <h3> Choose from below emojis to select your mood</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
