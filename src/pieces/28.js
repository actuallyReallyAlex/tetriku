import React from "react";
import PropTypes from "prop-types";

const TwentyEight = ({
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
      id="piece-28"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__2" />
      <div className="piece__single piece__single__3" />
      <div className="piece__single piece__single__8" />
      <div className="piece__single piece__single__13" />
    </div>
  );
};

TwentyEight.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default TwentyEight;
