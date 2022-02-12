import React from "react";
import UISwatch from "../swatch/UISwatch";
import useColorControllerV2 from "../../hooks/useColorControllerV2";

//
// showing how we can use multiple
// versions of the same controller, however we would
// just use 2 instances of the UIColorPicker in reality
//
const UIColourPicker: React.FC = () => {
  var colorCtrl1 = useColorControllerV2();
  var colorCtrl2 = useColorControllerV2();

  return (
    <>
      {/* controller 1 */}
      <div className="ui-color-picker-control">
        <button onClick={colorCtrl1.handleDownClickEvent}>down</button>
        <button onClick={colorCtrl1.handleUpClickEvent}>up</button>
        <dl>
          <dt>Color</dt>
          <dd>{colorCtrl1.color}</dd>
          <dt>Name</dt>
          <dd>{colorCtrl1.colorName}</dd>
        </dl>
        <UISwatch color={colorCtrl1.colorHex} />
      </div>

      {/* Controller 2 */}
      <div className="ui-color-picker-control">
        <button onClick={colorCtrl2.handleDownClickEvent}>down</button>
        <button onClick={colorCtrl2.handleUpClickEvent}>up</button>
        <dl>
          <dt>Color</dt>
          <dd>{colorCtrl2.color}</dd>
          <dt>Name</dt>
          <dd>{colorCtrl2.colorName}</dd>
        </dl>
        <UISwatch color={colorCtrl2.colorHex} />
      </div>
    </>
  );
};

export default UIColourPicker;
