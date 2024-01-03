import { useState } from "react";
import { CeasarBox } from "./components/CeasarBox";
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
    <div>
      <div className="header">Caesar cipher</div>

      <div className="ceasar-box">
        <CeasarBox />
        <TextBox
          text={text}
          handleEncryption={handleEncryption}
          handleInputChange={handleInputChange}
          num={num}
          setNum={setNum}
          mode={mode}
          setMode={setMode}
        />
      </div>
    </div>
  );
}

function TextBox({
  text,
  handleEncryption,
  handleInputChange,
  num,
  setNum,
  mode,
  setMode,
}) {
  return (
    <div className="right">
      <div className="right-content">
        <div className="textBox">
          <textarea
            spellCheck="false"
            autoFocus={false}
            value={text}
            onChange={handleInputChange}
            placeholder="Type here..."
            rows={15} // Set rows to 1 to allow the input to expand vertically
          />
          <div className="encrypt-button" onClick={handleEncryption}>
            Click
          </div>
        </div>

        <div>
          <EncCode num={num} setNum={setNum} />
        </div>
        <BoxButtons mode={mode} setMode={setMode} />
      </div>
    </div>
  );
}

export default App;
