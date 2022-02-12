import React, { useState } from "react";
import useColourHex from "../../hooks/useColourHex";
import useColourName from "../../hooks/useColourName";

// extracted some functions, but
// events are still handled inline
//
// the extracted functions can now be unit
// tested
//
const UIColourPicker: React.FC = () => {
  var [colour, setColour] = useState(0);

  var colourName = useColourName(colour);
  var colourHex = useColourHex(colour);

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
