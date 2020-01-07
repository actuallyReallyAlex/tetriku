import React from "react";
import Board from "./components/Board";
import Stage from "./components/Stage";
import { pieces } from "./constants";

const App = () => {
  return (
    <div id="app" style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {/* <Board />
      <Stage /> */}
      {pieces.map(component => component())}
    </div>
  );
};

export default App;
