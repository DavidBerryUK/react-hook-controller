import { renderHook, act } from "@testing-library/react-hooks";
import useColourHex from "../hooks/useColourHex";

describe("test colour name hook", () => {
  test("colour 0 - ff0000", () => {
    const { result } = renderHook(() => useColourHex(0));
    expect(result.current).toBe("#ff0000");
  });

  test("colour 1 - ff8000", () => {
    const { result } = renderHook(() => useColourHex(1));
    expect(result.current).toBe("#ff8000");
  });

  test("colour 2 - ffff00", () => {
    const { result } = renderHook(() => useColourHex(2));
    expect(result.current).toBe("#ffff00");
  });

  test("colour 3 - 80ff00", () => {
    const { result } = renderHook(() => useColourHex(3));
    expect(result.current).toBe("#80ff00");
  });

  test("colour 4 - 00ff00", () => {
    const { result } = renderHook(() => useColourHex(4));
    expect(result.current).toBe("#00ff00");
  });

  test("colour 5 - 00ff80", () => {
    const { result } = renderHook(() => useColourHex(5));
    expect(result.current).toBe("#00ff80");
  });

  test("colour 6 - 00ffff", () => {
    const { result } = renderHook(() => useColourHex(6));
    expect(result.current).toBe("#00ffff");
  });

  test("colour 7 - 0080ff", () => {
    const { result } = renderHook(() => useColourHex(7));
    expect(result.current).toBe("#0080ff");
  });

  test("colour 8 - 0000ff", () => {
    const { result } = renderHook(() => useColourHex(8));
    expect(result.current).toBe("#0000ff");
  });

  test("colour 9 - 8000ff", () => {
    const { result } = renderHook(() => useColourHex(9));
    expect(result.current).toBe("#8000ff");
  });

  test("colour 10 - ff00ff", () => {
    const { result } = renderHook(() => useColourHex(10));
    expect(result.current).toBe("#ff00ff");
  });

  test("colour 11 - ff0080", () => {
    const { result } = renderHook(() => useColourHex(11));
    expect(result.current).toBe("#ff0080");
  });
});
