import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { pieces } from "../constants";

const Stage = ({ selectedPiece, setSelectedPiece }) => {
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

    setPiece1(() => props => piece1({ ...props }));
    setPiece2(() => props => piece2({ ...props }));
    setPiece3(() => props => piece3({ ...props }));
  };

  return (
    <Fragment>
      <div id="stage">
        {Piece1 && (
          <Piece1
            pieceNumber={1}
            selectedPiece={selectedPiece}
            setSelectedPiece={setSelectedPiece}
            stageArea="left"
          />
        )}
        {Piece2 && (
          <Piece2
            pieceNumber={2}
            selectedPiece={selectedPiece}
            setSelectedPiece={setSelectedPiece}
            stageArea="center"
          />
        )}
        {Piece3 && (
          <Piece3
            pieceNumber={3}
            selectedPiece={selectedPiece}
            setSelectedPiece={setSelectedPiece}
            stageArea="right"
          />
        )}
      </div>
      <button
        onClick={() => {
          setSelectedPiece(null);
          loadPieces();
        }}
      >
        Load Pieces
      </button>
    </Fragment>
  );
};

Stage.propTypes = {
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired
};

export default Stage;
