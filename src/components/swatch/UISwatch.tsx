import React from "react";

interface IProperties {
  colour: string;
}
const UISwatch: React.FC<IProperties> = (props) => {
  return (
    <div className="swatch" style={{ backgroundColor: props.colour }}></div>
  );
};

export default UISwatch;
