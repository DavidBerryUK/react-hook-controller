import "../styles/Styles.scss";
import React from "react";

//
// Change the version number in the path
// below to demo each version of the control     |
//                                               V
import UIColourPicker from "../components/Version5/UIColourPicker";

const App: React.FC = () => {
  return (
    <div>
      <UIColourPicker />
    </div>
  );
};

export default App;
