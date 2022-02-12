import React from "react";
import useColorControllerV2 from "../../hooks/useColorControllerV2";

// event handlers and functions are
// encapsulated, but passing too many
// method of passing back parameters is getting out
// of control
const UIColourPicker: React.FC = () => {
  var { color, colorName, colorHex, handleDownClickEvent, handleUpClickEvent } =
    useColorControllerV2();

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
