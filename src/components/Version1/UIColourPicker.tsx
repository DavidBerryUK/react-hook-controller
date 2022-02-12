import React, { useState } from "react";

// Example of component that is poorly structured
// and doing too much internal processing, and little
// chance of writing maintainable
// unit tests
//
const UIColourPicker: React.FC = () => {
  var [color, setColor] = useState(0);

  var colorName = "";
  var colorHex = "";

  switch (color) {
    case 0:
      colorName = "Red";
      break;
    case 1:
      colorName = "Orange";
      break;
    case 2:
      colorName = "Yellow";
      break;
    case 3:
      colorName = "Chartreuse";
      break;
    case 4:
      colorName = "Green";
      break;
    case 5:
      colorName = "Spring Green";
      break;
    case 6:
      colorName = "Cyan";
      break;
    case 7:
      colorName = "Dodger Blue";
      break;
    case 8:
      colorName = "Blue";
      break;
    case 9:
      colorName = "Purple";
      break;
    case 10:
      colorName = "Violet";
      break;
    case 11:
      colorName = "Magenta";
      break;
  }

  switch (color) {
    case 0:
      colorHex = "#ff0000";
      break;
    case 1:
      colorHex = "#ff8000";
      break;
    case 2:
      colorHex = "#ffff00";
      break;
    case 3:
      colorHex = "#80ff00";
      break;
    case 4:
      colorHex = "#00ff00";
      break;
    case 5:
      colorHex = "#00ff80";
      break;
    case 6:
      colorHex = "#00ffff";
      break;
    case 7:
      colorHex = "#0080ff";
      break;
    case 8:
      colorHex = "#0000ff";
      break;
    case 9:
      colorHex = "#8000ff";
      break;
    case 10:
      colorHex = "#ff00ff";
      break;
    case 11:
      colorHex = "#ff0080";
      break;
  }
  return (
    <div className="ui-color-picker-control">
      <button
        onClick={() => {
          setColor((state) => (state <= 0 ? (state = 11) : state - 1));
        }}
      >
        down
      </button>
      <button
        onClick={() => {
          setColor((state) => (state >= 11 ? (state = 0) : state + 1));
        }}
      >
        up
      </button>
      <dl>
        <dt>Color</dt>
        <dd>{color}</dd>
        <dt>Name</dt>
        <dd>{colorName}</dd>
      </dl>
      <div className="swatch" style={{ backgroundColor: colorHex }}></div>
    </div>
  );
};

export default UIColourPicker;
