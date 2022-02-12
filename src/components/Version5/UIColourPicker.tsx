import React from "react";
import UISwatch from "../swatch/UISwatch";
import useColorControllerV2 from "../../hooks/useColorControllerV2";

//
// using same controller as in previous example, but
// as an object, still strongly typed and accessable.
//
// also moved the swatch to its own component
//
const UIColourPicker: React.FC = () => {
  var colorCtrl = useColorControllerV2();

  return (
    <div className="ui-color-picker-control">
      <button onClick={colorCtrl.handleDownClickEvent}>down</button>
      <button onClick={colorCtrl.handleUpClickEvent}>up</button>
      <dl>
        <dt>Color</dt>
        <dd>{colorCtrl.color}</dd>
        <dt>Name</dt>
        <dd>{colorCtrl.colorName}</dd>
      </dl>
      <UISwatch color={colorCtrl.colorHex} />
    </div>
  );
};

export default UIColourPicker;
