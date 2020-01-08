import React from "react";
import PropTypes from "prop-types";

const TwentyNine = ({
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
      id="piece-29"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__11" />
    </div>
  );
};

TwentyNine.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default TwentyNine;
