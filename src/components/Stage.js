import React, { Fragment, useState } from "react";
import { pieces } from "../constants";

const Stage = () => {
  const [Piece1, setPiece1] = useState(null);
  const [Piece2, setPiece2] = useState(null);
  const [Piece3, setPiece3] = useState(null);

  const getRandomPiece = () => {
    const randomIndex = Math.floor(Math.random() * pieces.length - 1) + 1;
    return pieces[randomIndex];
  };

  const loadPieces = () => {
    const piece1 = getRandomPiece();
    const piece2 = getRandomPiece();
    const piece3 = getRandomPiece();

    setPiece1(() => () => piece1({ stageArea: "left" }));
    setPiece2(() => () => piece2({ stageArea: "center" }));
    setPiece3(() => () => piece3({ stageArea: "right" }));
  };

  return (
    <Fragment>
      <div id="stage">
        {Piece1 && <Piece1 />}
        {Piece2 && <Piece2 />}
        {Piece3 && <Piece3 />}
      </div>
      <button onClick={() => loadPieces()}>Load Pieces</button>
    </Fragment>
  );
};

export default Stage;
