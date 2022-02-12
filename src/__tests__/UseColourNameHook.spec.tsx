import { renderHook, act } from "@testing-library/react-hooks";
import useColourName from "../hooks/useColourName";

describe("test colour name hook", () => {
  test("colour 0 - Red", () => {
    const { result } = renderHook(() => useColourName(0));
    expect(result.current).toBe("Red");
  });

  test("colour 1 - Orange", () => {
    const { result } = renderHook(() => useColourName(1));
    expect(result.current).toBe("Orange");
  });

  test("colour 2 - Yellow", () => {
    const { result } = renderHook(() => useColourName(2));
    expect(result.current).toBe("Yellow");
  });

  test("colour 3 - Chartreuse", () => {
    const { result } = renderHook(() => useColourName(3));
    expect(result.current).toBe("Chartreuse");
  });

  test("colour 4 - Green", () => {
    const { result } = renderHook(() => useColourName(4));
    expect(result.current).toBe("Green");
  });

  test("colour 5 - Spring Green", () => {
    const { result } = renderHook(() => useColourName(5));
    expect(result.current).toBe("Spring Green");
  });

  test("colour 6 - Cyan", () => {
    const { result } = renderHook(() => useColourName(6));
    expect(result.current).toBe("Cyan");
  });

  test("colour 7 - Dodger Blue", () => {
    const { result } = renderHook(() => useColourName(7));
    expect(result.current).toBe("Dodger Blue");
  });

  test("colour 8 - Blue", () => {
    const { result } = renderHook(() => useColourName(8));
    expect(result.current).toBe("Blue");
  });

  test("colour 9 - Purple", () => {
    const { result } = renderHook(() => useColourName(9));
    expect(result.current).toBe("Purple");
  });

  test("colour 10 - Violet", () => {
    const { result } = renderHook(() => useColourName(10));
    expect(result.current).toBe("Violet");
  });

  test("colour 11 - Magenta", () => {
    const { result } = renderHook(() => useColourName(11));
    expect(result.current).toBe("Magenta");
  });
});
