import "./App.css";
import "./styles.css";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";

    if (includeNumbers) {
      chars += numbers;
    }

    if (includeSymbols) {
      chars += symbols;
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleLengthChange = (event) => {
    const value = parseInt(event.target.value);
    setLength(value);
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Password Generator</h2>
        <label>
          Password Length:
          <input
            type="number"
            value={length}
            min={6}
            max={20}
            onChange={handleLengthChange}
          />
        </label>
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={handleIncludeNumbersChange}
          />
        </label>
        <label>
          Include Symbols:
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={handleIncludeSymbolsChange}
          />
        </label>
        <button onClick={generatePassword}>Generate Password</button>
        {password && (
          <div>
            <p className="generated-password">
              Generated Password: <strong>{password}</strong>
            </p>
            <button className="button" onClick={handleCopyPassword}>
              Copy Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
