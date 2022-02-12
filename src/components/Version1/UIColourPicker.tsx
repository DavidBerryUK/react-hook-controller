import React, { useState } from "react";

// Example of component that is poorly structured
// and doing too much internal processing, and little
// chance of writing maintainable
// unit tests
//
const UIColourPicker: React.FC = () => {
  var [colour, setColour] = useState(0);

  var colourName = "";
  var colourHex = "";

  switch (colour) {
    case 0:
      colourName = "Red";
      break;
    case 1:
      colourName = "Orange";
      break;
    case 2:
      colourName = "Yellow";
      break;
    case 3:
      colourName = "Chartreuse";
      break;
    case 4:
      colourName = "Green";
      break;
    case 5:
      colourName = "Spring Green";
      break;
    case 6:
      colourName = "Cyan";
      break;
    case 7:
      colourName = "Dodger Blue";
      break;
    case 8:
      colourName = "Blue";
      break;
    case 9:
      colourName = "Purple";
      break;
    case 10:
      colourName = "Violet";
      break;
    case 11:
      colourName = "Magenta";
      break;
  }

  switch (colour) {
    case 0:
      colourHex = "#ff0000";
      break;
    case 1:
      colourHex = "#ff8000";
      break;
    case 2:
      colourHex = "#ffff00";
      break;
    case 3:
      colourHex = "#80ff00";
      break;
    case 4:
      colourHex = "#00ff00";
      break;
    case 5:
      colourHex = "#00ff80";
      break;
    case 6:
      colourHex = "#00ffff";
      break;
    case 7:
      colourHex = "#0080ff";
      break;
    case 8:
      colourHex = "#0000ff";
      break;
    case 9:
      colourHex = "#8000ff";
      break;
    case 10:
      colourHex = "#ff00ff";
      break;
    case 11:
      colourHex = "#ff0080";
      break;
  }
  return (
    <div className="ui-colour-picker-control">
      <button
        onClick={() => {
          setColour((state) => (state <= 0 ? (state = 11) : state - 1));
        }}
      >
        down
      </button>
      <button
        onClick={() => {
          setColour((state) => (state >= 11 ? (state = 0) : state + 1));
        }}
      >
        up
      </button>
      <dl>
        <dt>Colour</dt>
        <dd>{colour}</dd>
        <dt>Name</dt>
        <dd>{colourName}</dd>
      </dl>
      <div className="swatch" style={{ backgroundColor: colourHex }}></div>
    </div>
  );
};

export default UIColourPicker;
