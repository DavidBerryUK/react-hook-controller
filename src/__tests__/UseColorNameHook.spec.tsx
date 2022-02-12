import { renderHook, act } from "@testing-library/react-hooks";
import useColorName from "../hooks/useColorName";

describe("test color name hook", () => {
  test("color 0 - Red", () => {
    const { result } = renderHook(() => useColorName(0));
    expect(result.current).toBe("Red");
  });

  test("color 1 - Orange", () => {
    const { result } = renderHook(() => useColorName(1));
    expect(result.current).toBe("Orange");
  });

  test("color 2 - Yellow", () => {
    const { result } = renderHook(() => useColorName(2));
    expect(result.current).toBe("Yellow");
  });

  test("color 3 - Chartreuse", () => {
    const { result } = renderHook(() => useColorName(3));
    expect(result.current).toBe("Chartreuse");
  });

  test("color 4 - Green", () => {
    const { result } = renderHook(() => useColorName(4));
    expect(result.current).toBe("Green");
  });

  test("color 5 - Spring Green", () => {
    const { result } = renderHook(() => useColorName(5));
    expect(result.current).toBe("Spring Green");
  });

  test("color 6 - Cyan", () => {
    const { result } = renderHook(() => useColorName(6));
    expect(result.current).toBe("Cyan");
  });

  test("color 7 - Dodger Blue", () => {
    const { result } = renderHook(() => useColorName(7));
    expect(result.current).toBe("Dodger Blue");
  });

  test("color 8 - Blue", () => {
    const { result } = renderHook(() => useColorName(8));
    expect(result.current).toBe("Blue");
  });

  test("color 9 - Purple", () => {
    const { result } = renderHook(() => useColorName(9));
    expect(result.current).toBe("Purple");
  });

  test("color 10 - Violet", () => {
    const { result } = renderHook(() => useColorName(10));
    expect(result.current).toBe("Violet");
  });

  test("color 11 - Magenta", () => {
    const { result } = renderHook(() => useColorName(11));
    expect(result.current).toBe("Magenta");
  });
});
