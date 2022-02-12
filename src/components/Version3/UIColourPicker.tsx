import React from "react";
import useColourControllerV1 from "../../hooks/useColourControllerV1";
import useColourHex from "../../hooks/useColourHex";
import useColourName from "../../hooks/useColourName";

// Extracted event handlers, but
// still too much code,
//
// The event handlers can be unit tested
//
const UIColourPicker: React.FC = () => {
  var { colour, handleDownClickEvent, handleUpClickEvent } =
    useColourControllerV1();

  var colourName = useColourName(colour);
  var colourHex = useColourHex(colour);

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
