import { useState } from "react";

interface IResponse {
  colour: number;
  handleUpClickEvent: () => void;
  handleDownClickEvent: () => void;
}

export default function useColourControllerV1(): IResponse {
  var [colour, setColour] = useState(0);

  const handleUpClickEvent = () => {
    setColour((state) => (state >= 11 ? (state = 0) : state + 1));
  };

  const handleDownClickEvent = () => {
    setColour((state) => (state <= 0 ? (state = 11) : state - 1));
  };

  return {
    colour,
    handleDownClickEvent,
    handleUpClickEvent,
  };
}
