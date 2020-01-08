import React from "react";
import PropTypes from "prop-types";

const Seven = ({ pieceNumber, selectedPiece, setSelectedPiece, stageArea }) => {
  const classList = ["piece-container", "piece-container__column"];
  if (selectedPiece === pieceNumber)
    classList.push("piece-container__selected");
  return (
    <div
      className={classList.join(" ")}
      id="piece-7"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

Seven.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default Seven;
