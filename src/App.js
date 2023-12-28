import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function encryption(letter, num, encryption_mode) {
    let index = letters.indexOf(letter);

    console.log(index);
    if (encryption_mode === "encrypt") {
      for (let i = 0; i < num; i++) {
        index++;
        if (index === 26) index = 0;
      }
    } else if (encryption_mode === "decrypt") {
      console.log(index);
      for (let i = 0; i < num; i++) {
        if (index === 0) index = 25;
        else index -= 1;
      }
    }
    return letters[index];
  }

  function handleEncryption() {
    const encrypted_text = [...text].map((e) => {
      if (letters.indexOf(e) !== -1) return encryption(e, 2, "decrypt");
      else return e;
    });
    console.log(encrypted_text.join(""));
  }
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>Ceasar Cipher</div>
      <input value={text} onChange={handleInputChange}></input>
      <button onClick={handleEncryption}>Click</button>
    </>
  );
}

export default App;
