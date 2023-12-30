import { useState } from "react";
import { BoxButtons } from "./components/BoxButtons";
import { EncCode } from "./components/EncCode";

function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState(1);
  const [mode, setMode] = useState("encrypt");

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

  function encryption(letter) {
    let index = letters.indexOf(letter);
    if (mode === "encrypt") {
      for (let i = 0; i < num; i++) {
        index++;
        if (index === 26) index = 0;
      }
    } else if (mode === "decrypt") {
      for (let i = 0; i < num; i++) {
        if (index === 0) index = 25;
        else index -= 1;
      }
    }
    return letters[index];
  }

  function handleEncryption() {
    const encrypted_text = [...text].map((e) => {
      if (letters.indexOf(e) !== -1) return encryption(e);
      else return e;
    });
    console.log(encrypted_text.join(""));
    setText(encrypted_text.join(""));
  }
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <CeasarBox />
      <div className="right-content">
        <input
          // className="caesar-box"
          value={text}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleEncryption}>Click</button>
        <EncCode num={num} setNum={setNum} />
        <BoxButtons mode={mode} setMode={setMode} />
      </div>
    </>
  );
}

function CeasarBox() {
  return (
    <div className="left-content">
      <h1>Caesar cipher</h1>
      <p>
        The most sophisticated type of cryptography in the ancient world emerged
        in the Roman Empire in 100 BC. The Caesar cipher, a substitution cipher,
        made messages unintelligible by shifting letters by a particular number
        of places down the Latin alphabet.
      </p>
      <p>
        The recipient, therefore, had to know the system and the number of
        alphabet places. Julius Caesar used this method to exchange messages
        with his army generals at war.
      </p>

      <div className="info-box">INFO</div>
    </div>
  );
}
export default App;
