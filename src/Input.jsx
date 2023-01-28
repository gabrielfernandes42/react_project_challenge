import colorNames from "colornames";

function Input({
  colorValue,
  setColorValue,
  setHexValue,
  changeColorText,
  setChangeColorText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="addcolor">
      <input
        type="text"
        required
        autoFocus
        value={colorValue}
        placeholder="Add Color"
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="text"
        onClick={() => setChangeColorText(!changeColorText)}
      >Change text color</button>
    </form>
  );
}

export default Input;
