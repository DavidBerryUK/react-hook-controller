import { useState } from "react";

interface IResponse {
  color: number;
  handleUpClickEvent: () => void;
  handleDownClickEvent: () => void;
}

export default function useColorControllerV1(): IResponse {
  var [color, setColor] = useState(0);

  const handleUpClickEvent = () => {
    setColor((state) => (state >= 11 ? (state = 0) : state + 1));
  };

  const handleDownClickEvent = () => {
    setColor((state) => (state <= 0 ? (state = 11) : state - 1));
  };

  return {
    color,
    handleDownClickEvent,
    handleUpClickEvent,
  };
}
