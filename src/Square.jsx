import React from "react";

function Square({ colorValue, hexValue, changeColorText }) {
  return (
    <section
      className="colorBox"
      style={{
        backgroundColor: colorValue,
        color: changeColorText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "Empty color value",
};

export default Square;
