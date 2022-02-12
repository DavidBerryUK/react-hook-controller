import React from "react";

interface IProperties {
  color: string;
}
const UISwatch: React.FC<IProperties> = (props) => {
  return (
    <div className="swatch" style={{ backgroundColor: props.color }}></div>
  );
};

export default UISwatch;
