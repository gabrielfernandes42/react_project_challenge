import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [changeColorText, setChangeColorText] = useState(true);

  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} changeColorText={changeColorText} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        changeColorText={changeColorText}
        setChangeColorText={setChangeColorText}
      />
    </div>
  );
}

export default App;
