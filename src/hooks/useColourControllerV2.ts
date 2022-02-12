import { useState } from "react";
import useColourHex from "./useColourHex";
import useColourName from "./useColourName";

interface IResponse {
  colour: number;
  colourName: string;
  colourHex: string;
  handleUpClickEvent: () => void;
  handleDownClickEvent: () => void;
}

export default function useColourControllerV2(): IResponse {
  var [colour, setColour] = useState(0);
  var colourName = useColourName(colour);
  var colourHex = useColourHex(colour);

  const handleUpClickEvent = () => {
    setColour((state) => (state >= 11 ? (state = 0) : state + 1));
  };

  const handleDownClickEvent = () => {
    setColour((state) => (state <= 0 ? (state = 11) : state - 1));
  };

  return {
    colour,
    colourName,
    colourHex,
    handleDownClickEvent,
    handleUpClickEvent,
  };
}
