import React from "react";
import UISwatch from "../swatch/UISwatch";
import useColourControllerV2 from "../../hooks/useColourControllerV2";

//
// using same controller as in previous example, but
// as an object, still strongly typed and accessable.
//
// also moved the swatch to its own component
//
const UIColourPicker: React.FC = () => {
  var colourCtrl = useColourControllerV2();

  return (
    <div className="ui-colour-picker-control">
      <button onClick={colourCtrl.handleDownClickEvent}>down</button>
      <button onClick={colourCtrl.handleUpClickEvent}>up</button>
      <dl>
        <dt>Colour</dt>
        <dd>{colourCtrl.colour}</dd>
        <dt>Name</dt>
        <dd>{colourCtrl.colourName}</dd>
      </dl>
      <UISwatch colour={colourCtrl.colourHex} />
    </div>
  );
};

export default UIColourPicker;
