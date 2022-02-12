import { useState } from "react";
import useColorHex from "./useColorHex";
import useColorName from "./useColorName";

interface IResponse {
  color: number;
  colorName: string;
  colorHex: string;
  handleUpClickEvent: () => void;
  handleDownClickEvent: () => void;
}

export default function useColorControllerV2(): IResponse {
  var [color, setColor] = useState(0);
  var colorName = useColorName(color);
  var colorHex = useColorHex(color);

  const handleUpClickEvent = () => {
    setColor((state) => (state >= 11 ? (state = 0) : state + 1));
  };

  const handleDownClickEvent = () => {
    setColor((state) => (state <= 0 ? (state = 11) : state - 1));
  };

  return {
    color,
    colorName,
    colorHex,
    handleDownClickEvent,
    handleUpClickEvent,
  };
}
