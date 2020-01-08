import React from "react";
import PropTypes from "prop-types";

const Fourteen = ({
  pieceNumber,
  selectedPiece,
  setSelectedPiece,
  stageArea
}) => {
  const classList = ["piece-container"];
  if (selectedPiece === pieceNumber)
    classList.push("piece-container__selected");
  return (
    <div
      className={classList.join(" ")}
      id="piece-14"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__21" />
      <div className="piece__single piece__single__17" />
    </div>
  );
};

Fourteen.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default Fourteen;
