import React from "react";
import UISwatch from "../swatch/UISwatch";
import useColourControllerV2 from "../../hooks/useColourControllerV2";

//
// showing how we can use multiple
// versions of the same controller, however we would
// just use 2 instances of the UIColourPicker in reality
//
const UIColouurPicker: React.FC = () => {
  var colourCtrl1 = useColourControllerV2();
  var colourCtrl2 = useColourControllerV2();

  return (
    <>
      {/* controller 1 */}
      <div className="ui-colour-picker-control">
        <button onClick={colourCtrl1.handleDownClickEvent}>down</button>
        <button onClick={colourCtrl1.handleUpClickEvent}>up</button>
        <dl>
          <dt>Colouur</dt>
          <dd>{colourCtrl1.colour}</dd>
          <dt>Name</dt>
          <dd>{colourCtrl1.colourName}</dd>
        </dl>
        <UISwatch colour={colourCtrl1.colourHex} />
      </div>

      {/* Controller 2 */}
      <div className="ui-colour-picker-control">
        <button onClick={colourCtrl2.handleDownClickEvent}>down</button>
        <button onClick={colourCtrl2.handleUpClickEvent}>up</button>
        <dl>
          <dt>Colouur</dt>
          <dd>{colourCtrl2.colour}</dd>
          <dt>Name</dt>
          <dd>{colourCtrl2.colourName}</dd>
        </dl>
        <UISwatch colour={colourCtrl2.colourHex} />
      </div>
    </>
  );
};

export default UIColouurPicker;
