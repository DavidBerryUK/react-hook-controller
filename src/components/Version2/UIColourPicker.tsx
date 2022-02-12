import React, { useState } from "react";
import useColorHex from "../../hooks/useColorHex";
import useColorName from "../../hooks/useColorName";

// extracted some functions, but
// events are still handled inline
//
// the extracted functions can now be unit
// tested
//
const UIColourPicker: React.FC = () => {
  var [color, setColor] = useState(0);

  var colorName = useColorName(color);
  var colorHex = useColorHex(color);

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
