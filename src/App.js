import { useState } from "react";

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

  function inc() {
    if (num !== 25) setNum((e) => e + 1);
  }
  function dec() {
    if (num !== 1) setNum((e) => e - 1);
  }

  return (
    <>
      <div>Ceasar Cipher</div>
      <input value={text} onChange={handleInputChange}></input>
      <button onClick={handleEncryption}>Click</button>
      <Button onClickFunc={dec}>◀</Button>
      <span>{num}</span>
      <Button onClickFunc={inc}>▶</Button>
      <BoxButtons mode={mode} setMode={setMode} />
    </>
  );
}

function Button({ children, onClickFunc = () => {} }) {
  return (
    <div className="Button" onClick={onClickFunc}>
      {children}
    </div>
  );
}

function BoxButtons({ mode, setMode }) {
  const selected = {
    "background-color": "green",
    color: "white",
    "border-color": "green",
  };
  return (
    <div>
      <div
        onClick={() => setMode("encrypt")}
        className={"EncButtons"}
        style={mode === "encrypt" ? selected : {}}
      >
        ENCRYPT
      </div>
      <div
        onClick={() => setMode("decrypt")}
        className={"EncButtons"}
        style={mode === "decrypt" ? selected : {}}
      >
        DECRYPT
      </div>
    </div>
  );
}
export default App;
