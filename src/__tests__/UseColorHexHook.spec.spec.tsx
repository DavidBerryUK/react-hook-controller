import { renderHook, act } from "@testing-library/react-hooks";
import useColorHex from "../hooks/useColorHex";

describe("test color name hook", () => {
  test("color 0 - ff0000", () => {
    const { result } = renderHook(() => useColorHex(0));
    expect(result.current).toBe("#ff0000");
  });

  test("color 1 - ff8000", () => {
    const { result } = renderHook(() => useColorHex(1));
    expect(result.current).toBe("#ff8000");
  });

  test("color 2 - ffff00", () => {
    const { result } = renderHook(() => useColorHex(2));
    expect(result.current).toBe("#ffff00");
  });

  test("color 3 - 80ff00", () => {
    const { result } = renderHook(() => useColorHex(3));
    expect(result.current).toBe("#80ff00");
  });

  test("color 4 - 00ff00", () => {
    const { result } = renderHook(() => useColorHex(4));
    expect(result.current).toBe("#00ff00");
  });

  test("color 5 - 00ff80", () => {
    const { result } = renderHook(() => useColorHex(5));
    expect(result.current).toBe("#00ff80");
  });

  test("color 6 - 00ffff", () => {
    const { result } = renderHook(() => useColorHex(6));
    expect(result.current).toBe("#00ffff");
  });

  test("color 7 - 0080ff", () => {
    const { result } = renderHook(() => useColorHex(7));
    expect(result.current).toBe("#0080ff");
  });

  test("color 8 - 0000ff", () => {
    const { result } = renderHook(() => useColorHex(8));
    expect(result.current).toBe("#0000ff");
  });

  test("color 9 - 8000ff", () => {
    const { result } = renderHook(() => useColorHex(9));
    expect(result.current).toBe("#8000ff");
  });

  test("color 10 - ff00ff", () => {
    const { result } = renderHook(() => useColorHex(10));
    expect(result.current).toBe("#ff00ff");
  });

  test("color 11 - ff0080", () => {
    const { result } = renderHook(() => useColorHex(11));
    expect(result.current).toBe("#ff0080");
  });
});
