import UIColourPicker from "../components/Version5/UIColourPicker";
import TestRenderer, { act } from "react-test-renderer";

// UI Test only needs to ensure that inital values are being displayed and
// that events are fired, we do not need to test all the hook logic
// as this is done in the hook tests
//
describe("colour picker control", () => {
  test("Ensure Control can be created", () => {
    const instance = createControlInstance();

    expect(instance.buttonDown).not.toBeNull();
    expect(instance.buttonUp).not.toBeNull();
    expect(instance.colourNumber).not.toBeNull();
    expect(instance.colourName).not.toBeNull();
    expect(instance.colourSwatch).not.toBeNull();
  });

  test("Test Initial Values", () => {
    const instance = createControlInstance();

    // test output values
    //
    expect(instance.colourNumber.children[0]).toBe("0");
    expect(instance.colourName.children[0]).toBe("Red");
    expect(instance.colourSwatch.props.style.backgroundColor).toBe("#ff0000");
  });

  test("Press Up Cick Event", () => {
    const instance = createControlInstance();

    // press up
    // (calls hook ColourControllerV2 )
    act(instance.buttonUp.props.onClick);

    // test output values
    // to confirm hook was called correctly and
    // control rendered output values
    expect(instance.colourNumber.children[0]).toBe("1");
    expect(instance.colourName.children[0]).toBe("Orange");
    expect(instance.colourSwatch.props.style.backgroundColor).toBe("#ff8000");
  });

  test("Press Down Click Event", () => {
    const instance = createControlInstance();
    // press up
    // (calls hook ColourControllerV2 )
    act(instance.buttonDown.props.onClick);

    // test output values
    // to confirm hook was called correctly and
    // control rendered output values
    expect(instance.colourNumber.children[0]).toBe("11");
    expect(instance.colourName.children[0]).toBe("Magenta");
    expect(instance.colourSwatch.props.style.backgroundColor).toBe("#ff0080");
  });

  function createControlInstance() {
    const testRenderer = TestRenderer.create(<UIColourPicker />);
    const testInstance = testRenderer.root;
    const buttonDown = testInstance.findAllByType("button")[0];
    const buttonUp = testInstance.findAllByType("button")[1];
    const colourNumber = testInstance.findAllByType("dd")[0];
    const colourName = testInstance.findAllByType("dd")[1];
    const colourSwatch = testInstance.findByProps({ className: "swatch" });
    return {
      buttonDown,
      buttonUp,
      colourNumber,
      colourName,
      colourSwatch,
    };
  }
});
