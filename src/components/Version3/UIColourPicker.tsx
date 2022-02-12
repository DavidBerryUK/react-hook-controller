import React from "react";
import useColorControllerV1 from "../../hooks/useColorControllerV1";
import useColorHex from "../../hooks/useColorHex";
import useColorName from "../../hooks/useColorName";

// Extracted event handlers, but
// still too much code,
//
// The event handlers can be unit tested
//
const UIColourPicker: React.FC = () => {
  var { color, handleDownClickEvent, handleUpClickEvent } =
    useColorControllerV1();

  var colorName = useColorName(color);
  var colorHex = useColorHex(color);

  return (
    <div className="ui-color-picker-control">
      <button onClick={handleDownClickEvent}>down</button>
      <button onClick={handleUpClickEvent}>up</button>
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
