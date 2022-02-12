import { renderHook, act } from "@testing-library/react-hooks";
import useColorControllerV2 from "../hooks/useColorControllerV2";

describe("test color controller hook", () => {
  test("create and test default state", () => {
    const { result } = renderHook(() => useColorControllerV2());
    expect(result.current.color).toBe(0);
    expect(result.current.colorName).toBe("Red");
    expect(result.current.colorHex).toBe("#ff0000");
  });

  test("click up single", () => {
    const { result } = renderHook(() => useColorControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
    });

    expect(result.current.color).toBe(1);
    expect(result.current.colorName).toBe("Orange");
    expect(result.current.colorHex).toBe("#ff8000");
  });

  test("click up multiple", () => {
    const { result } = renderHook(() => useColorControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
    });

    expect(result.current.color).toBe(5);
    expect(result.current.colorName).toBe("Spring Green");
    expect(result.current.colorHex).toBe("#00ff80");
  });

  test("click up multiple and wrap", () => {
    const { result } = renderHook(() => useColorControllerV2());

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

    expect(result.current.color).toBe(0);
    expect(result.current.colorName).toBe("Red");
    expect(result.current.colorHex).toBe("#ff0000");
  });

  test("click down", () => {
    const { result } = renderHook(() => useColorControllerV2());

    act(() => {
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleUpClickEvent();
      result.current.handleDownClickEvent();
    });

    expect(result.current.color).toBe(3);
    expect(result.current.colorName).toBe("Chartreuse");
    expect(result.current.colorHex).toBe("#80ff00");
  });

  test("click down and wrap", () => {
    const { result } = renderHook(() => useColorControllerV2());

    act(() => {
      result.current.handleDownClickEvent();
    });

    expect(result.current.color).toBe(11);
    expect(result.current.colorName).toBe("Magenta");
    expect(result.current.colorHex).toBe("#ff0080");
  });
});
