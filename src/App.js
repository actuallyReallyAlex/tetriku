import React, { useState } from "react";
import Board from "./components/Board";
import Stage from "./components/Stage";

const App = () => {
  const [selectedPiece, setSelectedPiece] = useState(null);

  return (
    <div id="app">
      <Board />
      <Stage
        selectedPiece={selectedPiece}
        setSelectedPiece={setSelectedPiece}
      />
    </div>
  );
};

export default App;
