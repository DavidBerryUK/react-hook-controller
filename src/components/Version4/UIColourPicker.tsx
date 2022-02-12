import React from "react";
import useColourControllerV2 from "../../hooks/useColourControllerV2";

// event handlers and functions are
// encapsulated, but passing too many
// method of passing back parameters is getting out
// of control
const UIColourPicker: React.FC = () => {
  var {
    colour,
    colourName,
    colourHex,
    handleDownClickEvent,
    handleUpClickEvent,
  } = useColourControllerV2();

  return (
    <div className="ui-colour-picker-control">
      <button onClick={handleDownClickEvent}>down</button>
      <button onClick={handleUpClickEvent}>up</button>
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
