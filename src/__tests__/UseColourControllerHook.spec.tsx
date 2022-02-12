import { renderHook, act } from "@testing-library/react-hooks";
import useColourControllerV2 from "../hooks/useColourControllerV2";

describe("test colour controller hook", () => {
  test("create and test default state", () => {
    const { result } = renderHook(() => useColourControllerV2());
    expect(result.current.colour).toBe(0);
    expect(result.current.colourName).toBe("Red");
    expect(result.current.colourHex).toBe("#ff0000");
  });

  test("click up single", () => {
    const { result } = renderHook(() => useColourControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
    });

    expect(result.current.colour).toBe(1);
    expect(result.current.colourName).toBe("Orange");
    expect(result.current.colourHex).toBe("#ff8000");
  });

  test("click up multiple", () => {
    const { result } = renderHook(() => useColourControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
    });

    expect(result.current.colour).toBe(5);
    expect(result.current.colourName).toBe("Spring Green");
    expect(result.current.colourHex).toBe("#00ff80");
  });

  test("click up multiple and wrap", () => {
    const { result } = renderHook(() => useColourControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
    });

    expect(result.current.colour).toBe(0);
    expect(result.current.colourName).toBe("Red");
    expect(result.current.colourHex).toBe("#ff0000");
  });

  test("click down", () => {
    const { result } = renderHook(() => useColourControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleDownClickEvent();
    });

    expect(result.current.colour).toBe(3);
    expect(result.current.colourName).toBe("Chartreuse");
    expect(result.current.colourHex).toBe("#80ff00");
  });

  test("click down and wrap", () => {
    const { result } = renderHook(() => useColourControllerV2());

    act(() => {
      result.current.handleDownClickEvent();
    });

    expect(result.current.colour).toBe(11);
    expect(result.current.colourName).toBe("Magenta");
    expect(result.current.colourHex).toBe("#ff0080");
  });
});
